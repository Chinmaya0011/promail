<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Resume Email Generator - README</title>
</head>
<body>
    <h1>Resume Email Generator</h1>

    <h2>Overview</h2>
    <p>
        The <strong>Resume Email Generator</strong> is a web application that enables users to upload their resume in PDF format and automatically generates a professional job application email tailored to a specific job position. Using the Co:here AI API, the app creates customized email content that can be previewed and sent directly via the user's email client.
    </p>
    <p>
        This project is built using <strong>React</strong> for the frontend, <strong>Express.js</strong> for the backend, and integrates the <strong>Co:here AI API</strong> for content generation.
    </p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#installation">Installation</a></li>
        <ul>
            <li><a href="#backend-setup">Backend Setup</a></li>
            <li><a href="#frontend-setup">Frontend Setup</a></li>
        </ul>
        <li><a href="#how-to-use">How to Use</a></li>
        <li><a href="#error-handling">Error Handling</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li><strong>PDF Resume Upload</strong>: Users can upload their resume in PDF format.</li>
        <li><strong>Job Details</strong>: Users can input job position, company name, and HR email address.</li>
        <li><strong>AI-Powered Email Generation</strong>: Co:here AI API generates a professional email based on the resume and job details.</li>
        <li><strong>Email Preview</strong>: Users can preview the email before sending.</li>
        <li><strong>Email Sending</strong>: The generated email can be sent directly via the user's email client.</li>
    </ul>

    <h2 id="technologies-used">Technologies Used</h2>
    <ul>
        <li><strong>Frontend</strong>: 
            <ul>
                <li>React</li>
                <li>Context API</li>
                <li>CSS Modules</li>
                <li>axios</li>
            </ul>
        </li>
        <li><strong>Backend</strong>:
            <ul>
                <li>Express.js</li>
                <li>Multer (for handling file uploads)</li>
                <li>Co:here AI API</li>
                <li>dotenv (for managing environment variables)</li>
                <li>CORS (for handling cross-origin requests)</li>
            </ul>
        </li>
        <li><strong>Other Tools</strong>:
            <ul>
                <li>pdf-parse (for parsing PDF resume content)</li>
            </ul>
        </li>
    </ul>

    <h2 id="installation">Installation</h2>

    <h3 id="backend-setup">Backend Setup</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone <repository_url>
cd <project_directory></code></pre>
        </li>
        <li><strong>Install backend dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Create a .env file</strong> in the root directory with the following environment variables:
            <pre><code>COHERE_API_KEY=your_cohere_api_key_here
PORT=3000</code></pre>
            Replace <strong>your_cohere_api_key_here</strong> with your actual API key from Co:here.
        </li>
        <li><strong>Start the backend server:</strong>
            <pre><code>npm start</code></pre>
            The backend server will run at <code>http://localhost:3000</code>.
        </li>
    </ol>

    <h3 id="frontend-setup">Frontend Setup</h3>
    <ol>
        <li><strong>Navigate to the frontend directory:</strong>
            <pre><code>cd client</code></pre>
        </li>
        <li><strong>Install frontend dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the frontend server:</strong>
            <pre><code>npm start</code></pre>
            The frontend will run at <code>http://localhost:3000</code>.
        </li>
    </ol>

    <h2 id="how-to-use">How to Use</h2>
    <ol>
        <li><strong>Navigate to the application</strong> in your browser.</li>
        <li><strong>Fill out the form</strong> with the required job details:
            <ul>
                <li>Position you're applying for</li>
                <li>HR email address</li>
                <li>Company name</li>
            </ul>
        </li>
        <li><strong>Upload your resume</strong> in PDF format.</li>
        <li>Click <strong>Generate</strong> to create the email.</li>
        <li>Review the <strong>email preview</strong> to make sure the details are correct.</li>
        <li><strong>Send the email</strong> using your default email client. You can copy the generated email content to your clipboard and paste it into your email client.</li>
    </ol>

    <h2 id="error-handling">Error Handling</h2>
    <ul>
        <li><strong>Form Validation</strong>: Ensures that all required fields (position, company, HR email) are filled out before generating the email.</li>
        <li><strong>File Validation</strong>: Only allows PDF file uploads for resumes. Other file types are rejected with an error message.</li>
        <li><strong>API Error Handling</strong>: If the Co:here API fails to generate an email, an error message is displayed to the user.</li>
    </ul>

    <h2 id="contributing">Contributing</h2>
    <p>We welcome contributions to this project. To contribute:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (<code>git checkout -b feature-name</code>).</li>
        <li>Make your changes.</li>
        <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
        <li>Push your changes (<code>git push origin feature-name</code>).</li>
        <li>Open a pull request with a description of the changes.</li>
    </ol>
    <p>Please ensure that your code adheres to the project's coding standards and includes relevant tests where applicable.</p>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

    <h2>Acknowledgements</h2>
    <ul>
        <li><strong>Co:here API</strong>: The AI-powered content generation feature relies on the Co:here API.</li>
        <li><strong>Multer</strong>: Used for handling file uploads in the backend.</li>
        <li><strong>pdf-parse</strong>: Used to parse and extract text from PDF resumes.</li>
    </ul>
</body>
</html>
