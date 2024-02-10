// LetterComponent.js
import React from 'react';

const LetterComponent = ({
  onSendLetter,
  onRemoveLetterDiv,
  letterFormData,
  setLetterFormData,
}) => {
  const handleChange = (field, value) => {
    setLetterFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <h2>Compose Letter</h2>

      <input
        type="text"
        placeholder='who??'
        value={letterFormData.from}
        onChange={(e) => handleChange('from', e.target.value)}
      />



      <input
        type="text"
        placeholder='To'
        value={letterFormData.to}
        onChange={(e) => handleChange('to', e.target.value)}
      />

      <input
        type="text"
        placeholder='Subject:'
        value={letterFormData.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
      />

      <textarea
        placeholder='Body'
        value={letterFormData.body}
        onChange={(e) => handleChange('body', e.target.value)}
      />

      <button onClick={onSendLetter}>Send Letter</button>
      <button onClick={onRemoveLetterDiv}>Cancel</button>
    </div>
  );
};

export default LetterComponent;
