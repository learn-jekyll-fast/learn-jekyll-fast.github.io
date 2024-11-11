let auth0Client;

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

const configureClient = async () => {
  auth0Client = await createAuth0Client({
    domain: 'dev-qirtwh6cktfuc8ap.us.auth0.com', // Your Auth0 domain
    client_id: 'if0RVNLLCc8jKwyxxaFXEL3vqDC9Svim', // Your Auth0 client I
  });
};

async function login() {

  try {
    await configureClient();
    await auth0Client.loginWithPopup();
    console.log('LOGGING IN   ');
  } catch (error) {
    console.log(error);
  }

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    const user = await auth0Client.getUser();
    setCookie("name", user.email, 7)
    setCookie("user", JSON.stringify(user), 7)
    sessionStorage.setItem('user', JSON.stringify(user))
    console.log('USER:  ' + JSON.stringify(user));
    window.location.replace('/dashboard.html')
    // window.location.href = '/dashboard.html';

    return;
  }
}

async function logout() {
  console.log('Logout  ' + window.location.origin);
  await configureClient();
  await auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
  deleteCookie('name')
}



