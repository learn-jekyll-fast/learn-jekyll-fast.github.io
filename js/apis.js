const BASE_URL = 'https://api.milesahead.team/api';

const jiraUrl = BASE_URL + '/jira/issue';

const currentUser = JSON.parse(sessionStorage.getItem('user'));

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const submitFeedback = async formData => {
  try {
    const data = {
      userName: currentUser.name,
      userEmail: currentUser.email,
      issueType: 'Feedback',
      ...formData
    };

    const response = await axios.post(`${jiraUrl}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = response.data;

    console.log(`Added a new Feedback!`, responseData);
    // await timeout(4000);

    return data;
  } catch (errors) {
    console.error(errors);
  }
};