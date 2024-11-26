import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import style from '../styles/PreviewMail.module.css'; // Import the CSS module

const PreviewMail = () => {
  const { msg, error, show } = useContext(AppContext);

  // Handle error state
  if (error) {
    const errorMessage = typeof error === 'object' && error.message ? error.message : error;
    return <div className={style.error}>{String(errorMessage)}</div>;
  }

  // Function to handle sending email directly to HR using mailto
  const sendToHR = () => {
    if (msg && msg.hrEmail && msg.emailSubject && msg.emailBody) {
      const subject = encodeURIComponent(msg.emailSubject);
      const body = encodeURIComponent(msg.emailBody);
      const hrEmail = msg.hrEmail;

      const mailtoLink = `mailto:${hrEmail}?subject=${subject}&body=${body}`;
      console.log(mailtoLink); // Check the mailto link

      // Open the email client
      window.location.href = mailtoLink;
    } else {
      alert('Please make sure HR email, subject, and body are provided.');
    }
  };

  // Handle case when `show` is false

  // Handle case when `show` is true but `msg` is missing
  if (show && !msg) {
    return (
      <div className={style.noData}>
        <p>Loading message data...</p>
        <p>
          This may take up to 60 seconds. Please wait patiently as we prepare your email preview.
        </p>
      </div>
    );
  }
  

  // Handle case when `show` is true and `msg` is available
  if (show && msg) {
    return (
      <div className={style.preview}>
        <h3 className={style.heading}>Preview Mail</h3>

        {/* Display Email Subject */}
        {msg.emailSubject && (
          <p className={style.text}>
            <strong>Email Subject:</strong> {msg.emailSubject}
          </p>
        )}

        {/* Display HR Email */}
        {msg.hrEmail && (
          <p className={style.text}>
            <strong>HR Email:</strong> {msg.hrEmail}
          </p>
        )}

        {/* Display Resume Text */}
        {msg.emailBody ? (
          <div className={style.resumeText}>
            <h4 className={style.subheading}>Resume Text:</h4>
            <p className={style.text}>{msg.emailBody}</p>
          </div>
        ) : (
          <p className={style.text}>No resume text available</p>
        )}

        {/* Add Send to HR button */}
        <button className={style.sendButton} onClick={sendToHR}>
          Send to HR
        </button>
      </div>
    );
  }

  // Fallback for unexpected states
};

export default PreviewMail;
