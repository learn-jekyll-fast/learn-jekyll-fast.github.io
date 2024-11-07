// The Auth0 client, initialized in configureClient()
let auth0Client = null;

function setCookie(name, value, days) {
  console.log("Setting the cookie...");
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  // Secure flag is necessary when running on HTTPS (like GitHub Pages)
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

function deleteCookie(name) {
  // Set the cookie with the same name, path, and secure flag, but with an expired date
  console.log("Deleting the cookie...");
  document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax; Secure";
}

/**
 * Starts the authentication flow
 */
const login = async (targetUrl) => {
  try {
    console.log("Logging in", targetUrl);

    const options = {
      authorizationParams: {
        redirect_uri: 'https://learn-jekyll-fast.github.io/dashboard-cm.html'
      }
    };

    if (targetUrl) {
      options.appState = { targetUrl };
    }
    console.log("About to do loginWithRedirect...");
    await auth0Client.loginWithRedirect(options);
  } catch (err) {
    console.log("Log in failed", err);
  }
};

/**
 * Executes the logout flow
 */
const logout = async () => {
  try {
    deleteCookie('name')
    console.log("Logging out...");
    await auth0Client.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  } catch (err) {
    console.log("Log out failed", err);
  }
};

/**
 * Retrieves the auth configuration from the server
 */
const fetchAuthConfig = () => fetch("https://staging.milesahead.today/auth_config.json");

/**
 * Initializes the Auth0 client
 */
const configureClient = async () => {
  console.log("Doing the configureClient...");
  const response = await fetchAuthConfig();
  const config = await response.json();
  console.log("About to create Auth0Client...");
  auth0Client = await auth0.createAuth0Client({
    domain: config.domain,
    clientId: config.clientId
  });
};

/**
 * Checks to see if the user is authenticated. If so, `fn` is executed. Otherwise, the user
 * is prompted to log in
 * @param {*} fn The function to execute if the user is logged in
 */
const requireAuth = async (fn, targetUrl) => {
  
  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    console.log("Decided user is authenticated in app.js...");
    return fn();
  }
  console.log("Decided user is NOT authenticated in app.js...");

  return login(targetUrl);
};

// Will run when page finishes loading
window.onload = async () => {
  await configureClient();

  // If unable to parse the history hash, default to the root URL
  // if (!showContentFromUrl(window.location.pathname)) {
  //  showContentFromUrl("/");
  //  window.history.replaceState({ url: "/" }, {}, "/");
  //}

  const bodyElement = document.getElementsByTagName("body")[0];

  // Listen out for clicks on any hyperlink that navigates to a #/ URL
  bodyElement.addEventListener("click", (e) => {
    console.log("Listening out for clicks on any hyperlink that navigates to a #/ URL");
    if (isRouteLink(e.target)) {
      const url = e.target.getAttribute("href");

      if (showContentFromUrl(url)) {
        console.log("In the if showContentFromURL code");
        e.preventDefault();
        window.history.pushState({ url }, {}, url);
      }
    }
  });

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    console.log("> User is authenticated so replacing title in window state for some reason...");
    window.history.replaceState({}, document.title, window.location.pathname);
    updateUI();
    return;
  }

  console.log("> User not authenticated");

  const query = window.location.search;
  const shouldParseResult = query.includes("code=") && query.includes("state=");

  if (shouldParseResult) {
    console.log("> Parsing redirect");
    try {
      const result = await auth0Client.handleRedirectCallback();

      if (result.appState && result.appState.targetUrl) {
        console.log("In the result.appState && result.appState.targetUrl.  About to showContentFromUrl...");
        showContentFromUrl(result.appState.targetUrl);
      }

      console.log("Logged in and about to get user from auth0Client");

      const user = await auth0Client.getUser()
      console.log("About to set cookie");
      setCookie("name", user.email, 7)
      setCookie("user", JSON.stringify(user), 7)
    } catch (err) {
      console.log("Error parsing redirect:", err);
    }

    window.history.replaceState({}, document.title, "/");
  }

  updateUI();
};
