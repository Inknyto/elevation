import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Input, CardActions, Button, Typography, OutlinedInput } from '@mui/material';
import LetterComponent from './LetterComponent';
import './style.css';
import { credentials } from './credentials';

const { username, password } = credentials;

const SearchComponent = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [showLetterComponent, setShowLetterComponent] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [blurrerVisible, setBlurrerVisible] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [letterFormData, setLetterFormData] = useState({
    from: '',
    to: '',
    subject: '',
    body: '',
  });

  const handleSearchInputChange = async (event) => {
    const query = event.target.value;

    try {
      const response = await fetch(`http://localhost:9200/software_jobs/_search?q=*${query}*&size=1000`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.hits.hits.map(offre => ({ id: offre._id, ...offre._source })));
      setSearchInputValue(query);
    } catch (error) {
      console.error('Error fetching data from Elasticsearch:', error);
    }
  };

  const showMore = async (id) => {
    try {
      const response = await fetch(`http://localhost:9200/software_jobs/_doc/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSelectedResult(data._source);
      setBlurrerVisible(true);
    } catch (error) {
      console.error('Error fetching data from Elasticsearch:', error);
    }
  };

  const closeBlurrer = () => {
    setBlurrerVisible(false);
  };

  const handleSendLetter = () => {
  };
  const handleRemoveLetterDiv = () => {
  };


  const CardComponent = ({ title, company_name, location, via, description, onCloseClick }) => {
    return (
      <div className="modal">
        <Card variant="outlined" className="job-card">
          <CardContent>
            <CardHeader title={title} subheader={`${company_name}, ${location}`} />
            <Typography component={'span'} >
              <Typography component="span" variant="body2" color="textSecondary">
                <strong>Via:</strong> {via}
              </Typography><br />
              <div className="scrollable-text">
                <Typography component="span" variant="body2" color="textSecondary">
                  {description}
                </Typography>
              </div>
            </Typography>
            <CardActions>
              <Button variant="outlined" onClick={() => setShowLetterComponent(!showLetterComponent)}>
                Apply
              </Button>
            </CardActions>
            <CardActions>
              <Button variant="outlined" onClick={closeBlurrer}>
                Close
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div id='search-engine-wrapper'>
      <OutlinedInput
        // variant='outlined'
        id='search-input'
        placeholder='What job are you looking for?'
        type="text"
        value={searchInputValue}
        onChange={handleSearchInputChange}
      />
      <div id='search-results'>
        {searchResults.map(result => (
          <div className='result-div' key={result.id}>
		<div className='result-data'>
            {/* Display search results */}
            <Typography variant="h6">Title: {result.title}</Typography>
            <Typography variant="body1">Company name: {result.company_name}</Typography>
            <Typography variant="body1">Location: {result.location}</Typography>
            <Typography variant="body2">Via: {result.via}</Typography>
            {/* Uncomment the following line if you want to display the description */}
            {/* <Typography variant="body2">Description: {result.description}</Typography> */}
            <Button variant="outlined" onClick={() => showMore(result.id)}>
              More
            </Button>
		</div>
            <div key={result.id+'skills'} className="job_skills">
              <h3>Required_skills:</h3>

              {Object.entries(result.skills).map(([category, skills]) => (
                <div key={category} className="skill_category">
                  <span className="category_title">{category}</span>

                  {skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {blurrerVisible && (
        <CardComponent
          title={selectedResult.title}
          company_name={selectedResult.company_name}
          location={selectedResult.location}
          via={selectedResult.via}
          description={selectedResult.description}
        />
      )}
      {showLetterComponent && (
        <LetterComponent
          letterFormData={letterFormData}
          setLetterFormData={setLetterFormData}
          onSendLetter={handleSendLetter}
          onRemoveLetterDiv={handleRemoveLetterDiv}
        />
      )}

    </div>

    //     </Typography>
  );
};

export default SearchComponent;
