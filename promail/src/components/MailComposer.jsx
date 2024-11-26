import React, { useContext } from "react";
import styles from "../styles/MailComposer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faEnvelope, faBuilding, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext"; // Import the context

const MailComposer = () => {
  // Access the context values (formData and functions)
  const { formData, handleChange, handleFileChange, handleSubmit } = useContext(AppContext);

  return (
    <div className={styles.mailComposerWrapper}>
      <div className={styles.mailComposerContainer}>
        <h1 className={styles.heading}>Apply for a Position</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Position Input */}
          <div className={styles.formGroup}>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Apply for Position"
              className={`${styles.input} ${styles.iconInput}`}
            />
            <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
          </div>

          {/* HR Email Input */}
          <div className={styles.formGroup}>
            <input
              type="email"
              id="hrEmail"
              name="hrEmail"
              value={formData.hrEmail}
              onChange={handleChange}
              placeholder="HR Email"
              className={`${styles.input} ${styles.iconInput}`}
            />
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </div>

          {/* Company Name Input */}
          <div className={styles.formGroup}>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className={`${styles.input} ${styles.iconInput}`}
            />
            <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
          </div>

          {/* Resume Upload Input */}
          <div className={`${styles.formGroup} ${styles.fileInputWrapper}`}>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className={styles.customFileInput}
              accept=".pdf,.doc,.docx,.txt" // Optional: restrict file types to common document types
            />
            <label htmlFor="resume" className={styles.fileLabel}>
              Upload Resume
            </label>
            {formData.resume && (
              <span className={styles.fileName}>{formData.resume.name}</span>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailComposer;
