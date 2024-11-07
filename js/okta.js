let auth0Client;

const configureClient = async () => {
  auth0Client = await createAuth0Client({
    domain: 'dev-fzaxiig2nqftlaxz.us.auth0.com', // Your Auth0 domain
    client_id: '25XWQm2rT7G0jxoUblSo4Ec3yZCEd8wG', // Your Auth0 client ID
  });
};

async function login() {

  const options = {
    authorizationParams: {
      redirect_uri: 'http://127.0.0.1:4000/'
    }
  };

  await auth0Client.loginWithRedirect(options);
  console.log('LOGGING IN   ');
}

// Will run when page finishes loading
window.onload = async () => {
  await configureClient();

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    console.log("> User is authenticated");

    return;
  }

  console.log("> User not authenticated");

};


async function retreiveData() {

  try {


    const redirectResult = await auth0Client.handleRedirectCallback();
    console.log('redirectResult:  ' + JSON.stringify(redirectResult));
    //logged in. you can get the user profile like this:
    const user = await auth0.getUser();
    console.log('USER:  ' + JSON.stringify(user));

    return user;
  } catch (error) {
    console.log(error);
  }

  return {};
}
