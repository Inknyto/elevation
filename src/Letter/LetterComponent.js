// LetterComponent.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LetterComponent.css';

const LetterComponent = ({
  onSendLetter,
  onRemoveLetterDiv,
  // letterFormData,
  // setLetterFormData,
}) => {
  const handleChange = (field, value) => {
   // setLetterFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div id='letterDiv'>
      <h2>Compose Letter</h2>

      <TextField
        type="text"
        label='From'
        // value={letterFormData.from}
        onChange={(e) => handleChange('from', e.target.value)}
      />

      <TextField
        type="text"
        label='To'
        // value={letterFormData.to}
        onChange={(e) => handleChange('to', e.target.value)}
      />

      <TextField
        type="text"
        label='Subject'
        // value={letterFormData.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
      />

      <TextField
        multiline
        rows={4}
        label='Body'
        // value={letterFormData.body}
        onChange={(e) => handleChange('body', e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={onSendLetter}>
        Send Letter
      </Button>
      <Button variant="contained" color="secondary" onClick={onRemoveLetterDiv}>
        Cancel
      </Button>
    </div>
  );
};

export default LetterComponent;
