import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create the context
export const AppContext = createContext();

// Create the Context Provider component
export const AppContextProvider = ({ children }) => {
  const [msg, setMsg] = useState(null); // Success message
  const [error, setError] = useState(null); // Error message
  const [formData, setFormData] = useState({
    position: "",
    hrEmail: "",
    companyName: "",
    resume: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  // Handle form submission (send data to the server)
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('position', formData.position);
    formDataToSend.append('hrEmail', formData.hrEmail);
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('resume', formData.resume);

    // Send data to the server
    axios.post('http://localhost:3000/', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure correct Content-Type for file upload
      },
    })
      .then((response) => {
        // Assuming response.data contains the data you want to preview
        setMsg(response.data);  // Store response message/data
      })
      .catch((err) => {
        setError(err.response ? err.response.data : err.message);  // Store error message
      });
  };

  return (
    <AppContext.Provider
      value={{
        formData,
        msg,        // Success message (email data preview)
        error,      // Error message (if any)
        handleChange,
        handleFileChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
