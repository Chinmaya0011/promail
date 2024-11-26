import React from 'react';
import Nav from '../components/Nav';
import styles from '../styles/HomePage.module.css'; // Import the CSS module
import MailComposer from '../components/MailComposer';
import PreviewMail from '../components/PreviewMail';
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <MailComposer/>
      <PreviewMail/>
    </div>
  );
};

export default HomePage;
