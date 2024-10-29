// URL mapping, from hash to a function that responds to that URL action
const router = {
  "/": () => showContent("content-home"),
  "/profile": () =>
    requireAuth(() => showContent("content-profile"), "/profile"),
  "/login": () => login()
};

//Declare helper functions

/**
 * Iterates over the elements matching 'selector' and passes them
 * to 'fn'
 * @param {*} selector The CSS selector to find
 * @param {*} fn The function to execute for every element
 */
const eachElement = (selector, fn) => {
  for (let e of document.querySelectorAll(selector)) {
    fn(e);
  }
};

/**
 * Tries to display a content panel that is referenced
 * by the specified route URL. These are matched using the
 * router, defined above.
 * @param {*} url The route URL
 */
const showContentFromUrl = (url) => {
  if (router[url]) {
    router[url]();
    return true;
  }

  return false;
};

/**
 * Returns true if `element` is a hyperlink that can be considered a link to another SPA route
 * @param {*} element The element to check
 */
const isRouteLink = (element) =>
  element.tagName === "A" && element.classList.contains("route-link");

/**
 * Displays a content panel specified by the given element id.
 * All the panels that participate in this flow should have the 'page' class applied,
 * so that it can be correctly hidden before the requested content is shown.
 * @param {*} id The id of the content to show
 */
const showContent = (id) => {
  console.log("In showContent Printing out the id: " + id);
  eachElement(".page", (p) => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
};

/**
 * Updates the user interface
 */
const updateUI = async () => {
  try {

   console.log("In updateUI... This is where we toggle link visibility...");
    
    const isAuthenticated = await auth0Client.isAuthenticated();
    console.log("Here is the autho0Client: " + JSON.stringify(auth0Client));
    if (isAuthenticated) {
      console.log("User is authenticated apparently so we will display auth links...");
      const user = await auth0Client.getUser();

      document.getElementById("profile-data").innerText = JSON.stringify(
        user,
        null,
        2
      );
      console.log("We set the inner text and are about to toggle visibilities...");
      document.querySelectorAll("pre code").forEach(hljs.highlightBlock);

      eachElement(".profile-image", (e) => (e.src = user.picture));
      eachElement(".user-name", (e) => (e.innerText = user.name));
      eachElement(".user-email", (e) => (e.innerText = user.email));
      eachElement(".auth-invisible", (e) => e.classList.add("hidden"));
      eachElement(".auth-visible", (e) => e.classList.remove("hidden"));

      /*****/

      console.log("Now dealing with subscriptions...");

          const anchorElement = document.getElementById('chatbot-subscription-link');
    console.log(user.chatbot_subscription_link);
    // Check if the element exists and the user has the 'chatbot-subscription-link' property
    if (anchorElement && user.chatbot_subscription_link) {
        // Set the href attribute to the value in the user object
      console.log("Setting the anchor link tag");
        anchorElement.href = user.chatbot_subscription_link;
    }

      
      if (Array.isArray(user.active_subscriptions)) {
        // Check if any subscription has the specific ID
        const hasSubscription = user.active_subscriptions.some(subscription => 
            subscription.id === 'sub_1QDVc9E1kHJTQOxYrYxxa5HY'
        );

        // If found, handle visibility of subscription fields
        if (hasSubscription) {
          const subscriptionFields = document.querySelectorAll('[data-subscription="sub_1QDVc9E1kHJTQOxYrYxxa5HY"]');
          
          subscriptionFields.forEach(field => {
            if (field.classList.contains('subs-visible')) {
              field.classList.remove('hidden');
            } else if (field.classList.contains('subs-invisible')) {
              field.classList.add('hidden');
            }
          });

        } else {
          console.warn("No active subscriptions found.");
        }

      }

      /*****/

    } else {
      console.log("User is NOT authenticated apparently. Making tags hidden for unauth...");
      console.log("Can we double-check auth here?");
      eachElement(".auth-invisible", (e) => e.classList.remove("hidden"));
      eachElement(".auth-visible", (e) => e.classList.add("hidden"));
    }
  } catch (err) {
    console.log("Error updating UI!", err);
    return;
  }

  console.log("UI updated with auth/unauth links toggled...");
};

window.onpopstate = (e) => {
  console.log("In onpopstate");
  if (e.state && e.state.url && router[e.state.url]) {
    console.log("Going to do showContentFromURL in onpopstate");
    showContentFromUrl(e.state.url);
  }
};
