import React, { useState } from "react";
import "./ChangeProfilePicture.css";

const ChangeProfilePicture = ({ currentPicture, onSave }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(currentPicture);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreview(currentPicture);
  };

  const handleSave = () => {
    if (selectedFile) {
      onSave(selectedFile);
    }
  };

  return (
    <div className="change-profile-picture">
      <h2>Change Profile Picture</h2>
      <div className="preview">
        <img src={preview} alt="Profile Preview" className="profile-preview" />
      </div>
      <input type="file" onChange={handleFileChange} className="file-input" />
      <button onClick={handleSave} className="save-button">
        Save
      </button>
      {/* <button onClick={handleRemove} className="cancel-button">
        Remove
      </button> */}
    </div>
  );
};

export default ChangeProfilePicture;
