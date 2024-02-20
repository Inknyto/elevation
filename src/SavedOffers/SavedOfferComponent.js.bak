import React, { useState, useEffect } from 'react';
import { useSearchResults, fetchSelectedResult } from './SearchRequest';
import { useTheme } from '@mui/material';
import { Card, CardContent, CardHeader, CardActions, Button, Typography, OutlinedInput } from '@mui/material';
import LetterComponent from '../Letter/LetterComponent';
import './SearchComponent.css';


const SearchComponent = () => {
  const theme = useTheme();
  const [showLetterComponent, setShowLetterComponent] = useState(false);

  const [isInputDocked, setIsInputDocked] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const [query, setQuery] = useState('');
  const [id, setId] = useState(''); 
	
  const cachedSearchResults = useSearchResults(query);
// No caching for the selected result
//  const cachedSelectedResult = useSelectedResult(id);

  const [blurrerVisible, setBlurrerVisible] = useState(false);

  const [letterFormData, setLetterFormData] = useState({
    from: '',
    to: '',
    subject: '',
    body: '',
  });

  const handleSearchInputChange = async (event) => {
    // Use cachedSearchResults directly
    setQuery(event.target.value);
    const resolvedValue = await cachedSearchResults;
    // setSearchResults(cachedSearchResults);
    setSearchResults(resolvedValue);
    // console.log(resolvedValue)
	  // logs the array of jobs data
  };

const showMore = async (id) => {
  try {
    setId(id);
	  // console.log('The Id: ',id)
  // const cachedSelectedResult = fetchSelectedResult(id);
	  // console.log(cachedSelectedResult)
   // This can show the previous content of the blurrer 
	    // setBlurrerVisible(true)
    // Wait for the cachedSelectedResult to be resolved
     const selectedValue = await fetchSelectedResult(id);
      setSelectedResult(selectedValue);
      setBlurrerVisible(true)

    // Check if selectedValue is not null before updating the state
  //  if (selectedValue) {
    //  setSelectedResult(cachedSelectedResult);
   // } else {

      // Handle the case when selectedValue is null or undefined
      // You may want to display an error message or handle it as needed
   // }
  } catch (error) {
    console.error('Error in showMore:', error);
  }
};

// const showMore = async (id) => {
//    setBlurrerVisible(true);
//    setId(id); 
//    const selectedValue = await cachedSelectedResult;
// 
//    setSelectedResult(selectedValue)
// }; 
// 
  const closeBlurrer = () => {
    setBlurrerVisible(false);
  };

  const toggleLetter = () => {
    setShowLetterComponent(!showLetterComponent);
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
            <Typography component="span" >
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
              <Button variant="outlined" onClick={toggleLetter}>
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
  const handleScroll = () => {
    // Adjust the threshold value based on when you want the input to be docked
    const threshold = 200;

    if (window.scrollY > threshold && !isInputDocked) {
      setIsInputDocked(true);
    } else if (window.scrollY <= threshold && isInputDocked) {
      setIsInputDocked(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInputDocked]);

  return (
    <div id='search-engine-wrapper'>
      <OutlinedInput

        // variant='outlined'
        id='search-input'
        placeholder='What job are you looking for?'
 //       label='search'
        type="text"
        style={{
          position: isInputDocked ? 'fixed' : 'relative',
          top: isInputDocked ? 10 : 'auto',
          zIndex: 1000,
	  backgroundColor:theme.palette.background.default,
        }}
        // onChange={useSearchResults}
	      value={query}
	  // onChange={(e) => setQuery(e.target.value)}
	  onChange={handleSearchInputChange}
      />

      <div id='search-results' 
        style={{
          marginTop: isInputDocked ? '21vh' : '25px',
	}}
	  >
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
            {/* // <Button variant="outlined" onClick={() => setSelectedResult(result.id)}> */}
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
          title={selectedResult?.title}
          company_name={selectedResult?.company_name}
          location={selectedResult?.location}
          via={selectedResult?.via}
          description={selectedResult?.description}
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

  );
};

export default SearchComponent;
