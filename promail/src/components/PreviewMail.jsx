import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import style from '../styles/PreviewMail.module.css'; // Import the CSS module

const PreviewMail = () => {
  const { msg, error } = useContext(AppContext);
  const [showLongWaitMessage, setShowLongWaitMessage] = useState(false);

  // Handle timeout for loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLongWaitMessage(true);
    }, 60000); // 60 seconds

    return () => clearTimeout(timeout);
  }, []);

  console.log(msg);

  // Handle error state
  if (error) {
    const errorMessage = typeof error === 'object' && error.message ? error.message : error;
    return <div className={style.error}>{String(errorMessage)}</div>; // Add className from CSS module
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

  // Handle message state if it exists
  if (msg) {
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

  // Handle loading state
  return (
    <div className={style.noData}>
      {showLongWaitMessage ? (
        <p>Loading is taking longer than expected, please wait up to 60 seconds.</p>
      ) : (
        <p>Please wait... </p>
      )}
    </div>
  );
};

export default PreviewMail;
