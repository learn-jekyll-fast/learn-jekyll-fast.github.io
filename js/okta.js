let auth0Client;

const configureClient = async () => {
  auth0Client = await createAuth0Client({
    domain: 'dev-fzaxiig2nqftlaxz.us.auth0.com', // Your Auth0 domain
    client_id: '25XWQm2rT7G0jxoUblSo4Ec3yZCEd8wG', // Your Auth0 client ID
    redirect_uri: window.location.origin
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

  //logged in. you can get the user profile like this:



  if (isAuthenticated) {
    console.log("> User is authenticated");

    const user = await auth0Client.getUser();
    sessionStorage.setItem('user', JSON.stringify(user))
    console.log('USER:  ' + JSON.stringify(user));
    window.location.href = '/dashboard.html';

    return;
  }
}

// Will run when page finishes loading
window.onload = async () => {
  console.log('onLoad');

};

