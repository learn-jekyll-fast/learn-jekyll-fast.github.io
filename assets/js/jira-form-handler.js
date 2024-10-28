async function handleSubmit(event) {
  event.preventDefault();

  const projectKey = document.getElementById('projectKey').value;
  const summary = document.getElementById('summary').value;
  const description = document.getElementById('description').value;
  const issueType = document.getElementById('issueType').value;

  const issueData = {
      fields: {
          project: {
              key: projectKey,
          },
          summary: summary,
          description: description,
          issuetype: {
              name: issueType,
          },
      },
  };

  console.log(`issueData : ${JSON.stringify(issueData)}`);
  
  try {
      const response = await fetch('http://localhost:5000/api/issue', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(issueData),
      });

      const data = await response.json();
      document.getElementById('success').textContent = 'Issue created successfully: ' + data.key;
      document.getElementById('error').textContent = '';
  } catch (err) {
      console.error('Error:', err);
      document.getElementById('error').textContent = 'Failed to create issue: ' + (err.response ? err.response.data : err.message);
      document.getElementById('success').textContent = '';
  }
}
