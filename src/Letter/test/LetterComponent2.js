import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LetterComponent.css';

// Import Gemini AI
import { GoogleGenerativeAI } from '@google/generative-ai';

const LetterComponent = ({ onSendLetter, onRemoveLetterDiv, jobDescription }) => {
  const [loading, setLoading] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [letterFormData, setLetterFormData] = useState({
    from: '',
    to: '',
    subject: '',
    body: '',
  });

  const genAI = new GoogleGenerativeAI('YOUR-API-KEY-HERE');

  const handleChange = (field, value) => {
    setLetterFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const generateCoverLetter = async () => {
    setLoading(true);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Write a cover letter based on the following job description: ${jobDescription}. From ${letterFormData.from} to ${letterFormData.to} with the subject "${letterFormData.subject}". ${letterFormData.body}`;
    
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setGeneratedLetter(text);
    } catch (error) {
      console.error('Error generating cover letter:', error);
      setGeneratedLetter('Error generating cover letter. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Update letter content when jobDescription prop changes
    setGeneratedLetter('');
  }, [jobDescription]);

  return (
    <div id='letterDiv'>
      <h2>Compose Letter</h2>

      <TextField
        type="text"
        label='From'
        value={letterFormData.from}
        onChange={(e) => handleChange('from', e.target.value)}
      />

      <TextField
        type="text"
        label='To'
        value={letterFormData.to}
        onChange={(e) => handleChange('to', e.target.value)}
      />

      <TextField
        type="text"
        label='Subject'
        value={letterFormData.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
      />

      <TextField
        multiline
        rows={4}
        label='Body'
        value={letterFormData.body}
        onChange={(e) => handleChange('body', e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={generateCoverLetter}>
        Generate Cover Letter
      </Button>

      <Button variant="contained" color="secondary" onClick={onRemoveLetterDiv}>
        Cancel
      </Button>

      <div className='generated-letter'>
        {!loading && generatedLetter && <p>{generatedLetter}</p>}
        {loading && <p>Loading...</p>}
      </div>

      <Button variant="contained" color="primary" onClick={() => onSendLetter(generatedLetter)}>
        Send Letter
      </Button>
    </div>
  );
};

export default LetterComponent;
