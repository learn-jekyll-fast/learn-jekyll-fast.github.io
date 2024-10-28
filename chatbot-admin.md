---
companyname: "Align Chatbot Training"
layout: "minimal"
---

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f9;
    color: #333;
}
.form-section {
    background-color: white;
    border: 2px solid black;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}
label {
    display: block;
    margin: 10px 0 5px;
}
input[type="text"], input[type="file"], textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
}
button {
    background-color: #009688;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background-color: #00796b;
}
.response {
    margin-top: 10px;
    padding: 10px;
    border-radius: 6px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
}
</style>
<title>AI Bot Training Interface</title>


<p style="font-size: 24px; text-align: center;">AI Bot Training Interface</p>

<!-- Upload Website URL Section -->
<div class="form-section" id="url-section">
<p>Upload Website URL</p>
<form id="url-form">
<label for="website-url">Website URL:</label>
<input type="text" id="website-url" name="website-url" required />
<button type="submit">Submit URL</button>
</form>
<div class="response" id="url-response"></div>
</div>

<!-- Submit Text Section -->
<div class="form-section" id="text-section">
<p>Submit Text</p>
<form id="text-form">
<label for="text-input">Text Content:</label>
<textarea id="text-input" name="text-input" rows="5" placeholder="Enter your text here..." required></textarea>
<label for="text-title">Title:</label>
<input type="text" id="text-title" name="text-title" placeholder="Title for the text content" required />
<button type="submit">Submit Text</button>
</form>
<div class="response" id="text-response"></div>
</div>

<!-- Upload PDF Section -->
<div class="form-section" id="pdf-section">
<p>Upload PDF File</p>
<form id="pdf-form">
<label for="pdf-file">Select PDF:</label>
<input type="file" id="pdf-file" name="pdf-file" accept="application/pdf" required />
<label for="pdf-title">Title:</label>
<input type="text" id="pdf-title" name="pdf-title" placeholder="Title for the PDF content" required />
<button type="submit">Upload PDF</button>
</form>
<div class="response" id="pdf-response"></div>
</div>

<script>
const chatbotId = "clyq5fuab00018bz24tj8c22x";
const bearerToken = "Bearer clyq5ghot000ntfbijmkickah";

// Handle URL Submission
document.getElementById('url-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('website-url').value.trim();
    if (!url) {
        alert('Please enter a valid URL.');
        return;
    }

    const options = {
        method: 'POST',
        headers: {
            'Authorization': bearerToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            chatbotId: chatbotId
        })
    };

    fetch('https://api.milesahead.team/api/chatbot/url', options)
        .then(response => response.json())
        .then(data => {
            document.getElementById('url-response').textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            console.error(err);
            document.getElementById('url-response').textContent = 'Error: ' + err.message;
        });
});

// Handle Text Submission
document.getElementById('text-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const textContent = document.getElementById('text-input').value.trim();
    const title = document.getElementById('text-title').value.trim();

    if (!textContent || !title) {
        alert('Please enter both title and text content.');
        return;
    }

    const options = {
        method: 'POST',
        headers: {
            'Authorization': bearerToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            content: textContent,
            chatbotId: chatbotId
        })
    };

    fetch('https://api.milesahead.team/api/chatbot/text', options)
        .then(response => response.json())
        .then(data => {
            document.getElementById('text-response').textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            console.error(err);
            document.getElementById('text-response').textContent = 'Error: ' + err.message;
        });
});

// Handle PDF Upload
document.getElementById('pdf-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('pdf-file');
    const title = document.getElementById('pdf-title').value.trim();

    if (fileInput.files.length === 0) {
        alert('Please select a PDF file to upload.');
        return;
    }

    if (!title) {
        alert('Please enter a title for the PDF content.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const arrayBuffer = e.target.result;
        // Here you would typically process the PDF to extract text content.
        // For simplicity, we'll assume the content is extracted and use placeholder text.

        // Placeholder content - replace with actual PDF processing as needed
        const pdfContent = "PDF source content extracted from the file.";

        const options = {
            method: 'POST',
            headers: {
                'Authorization': bearerToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: [{
                    text: pdfContent,
                    page: 1 // You can modify this to handle multiple pages if needed
                }],
                chatbotId: chatbotId
            })
        };

        fetch('https://api.milesahead.team/api/chatbot/pdf', options)
            .then(response => response.json())
            .then(data => {
                document.getElementById('pdf-response').textContent = JSON.stringify(data, null, 2);
            })
            .catch(err => {
                console.error(err);
                document.getElementById('pdf-response').textContent = 'Error: ' + err.message;
            });
    };

    reader.onerror = function() {
        console.error("Failed to read the PDF file.");
        document.getElementById('pdf-response').textContent = 'Error: Failed to read the PDF file.';
    };

    reader.readAsArrayBuffer(file);
});
</script>

<b>Chatbot Integration</b><br/><br/>

<iframe
  src="https://app.livechatai.com/aibot-iframe/clyq5fuab00018bz24tj8c22x"
  style="border:1px solid #EAEAEA"
  width="100%"
  height="680"
  frameborder="0"
  allow="microphone"
></iframe>
