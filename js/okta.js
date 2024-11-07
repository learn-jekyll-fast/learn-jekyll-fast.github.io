let auth0;

async function login() {
  auth0 = await createAuth0Client({
    domain: 'dev-fzaxiig2nqftlaxz.us.auth0.com', // Your Auth0 domain
    client_id: '25XWQm2rT7G0jxoUblSo4Ec3yZCEd8wG', // Your Auth0 client ID
    redirect_uri: 'https://learn-jekyll-fast.github.io/dashboard.html' // Adjust the redirect URI as needed
  });
  await auth0.loginWithRedirect();
  console.log('LOGGING IN   ');
}

async function retreiveData() {

  try {


    const redirectResult = await auth0.handleRedirectCallback();
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
