// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import { credentials } from "./credentials.js";
import LetterComponent from './LetterComponent'; // Import the LetterComponent
import './style.css'; // Import the CSS file

// Destructure username and password from credentials
const { username, password } = credentials;

// SearchComponent functional component
const SearchComponent = () => {
  // State variables
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const [blurrerVisible, setBlurrerVisible] = useState(false);
  const [letterFormData, setLetterFormData] = useState({
    from: '',
    to: '',
    subject: '',
    body: ''
  });
  const [selectedResult, setSelectedResult] = useState(null);

  // Handle search input change
  const handleSearchInputChange = async (event) => {
    const query = event.target.value;

    try {
      // Fetch data from Elasticsearch based on the search query
      const response = await fetch(`http://localhost:9200/software_jobs/_search?q=*${query}*&size=1000`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      const data = await response.json();
      // Update search results with data from Elasticsearch
      setSearchResults(data.hits.hits.map(offre => ({ id: offre._id, ...offre._source })));
    } catch (error) {
      console.error('Error fetching data from Elasticsearch:', error);
    }
  };

  // Show the letter composition div
  const showLetterDiv = () => {
    const originalDiv = document.getElementById('description');
    const letterDiv = document.createElement('div');
    letterDiv.id = 'letterDiv';

    letterDiv.innerHTML = (
      <LetterComponent
        onSendLetter={sendLetter}
        onRemoveLetterDiv={removeLetterDiv}
        letterFormData={letterFormData}
        setLetterFormData={setLetterFormData}
      />
    );

    const hiddenDesc = originalDiv.cloneNode(true);
    hiddenDesc.id = 'hidden-description';
    hiddenDesc.style.display = 'none';
    document.body.append(hiddenDesc);
    originalDiv.replaceWith(letterDiv);
  };

  // Remove the letter composition div
  const removeLetterDiv = () => {
    const letterDiv = document.getElementById('letterDiv');
    const hiddenDesc = document.getElementById('hidden-description');

    if (letterDiv && hiddenDesc) {
      hiddenDesc.id = 'description';
      hiddenDesc.style.display = 'block';
      letterDiv.replaceWith(hiddenDesc);
    } else {
      console.error('Original element (hiddenDesc or letterDiv) not found.');
    }
  };

  // Send the composed letter
  const sendLetter = () => {
    // Implement the logic to send the letter (placeholder logic with an alert)
    alert('Letter sent!');
    removeLetterDiv();
  };

  // Display search results
  const displayResults = (results) => {
    setSearchResults(results);
  };

  // Fetch more details for a selected result
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
      // Store the selected result in state
      setSelectedResult(data._source);
      
      // todo: show the description instead of the letter on click on showMore

      setBlurrerVisible(true);
    } catch (error) {
      console.error('Error fetching data from Elasticsearch:', error);
    }
  };

  // Close the blurrer
  const closeBlurrer = () => {
    setBlurrerVisible(false);
  };

  // Effect hook to handle scroll and fix the search input
  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = document.getElementById('searchInput').offsetTop;
      setIsFixed(window.scrollY > offsetTop);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // JSX rendering
  return (
    <div id='search-engine-wrapper'>
      {/* Search input */}
      <input
        id="searchInput"
        type="text"
        placeholder="What job are you looking for?"
        value={searchInputValue}
        onChange={handleSearchInputChange}
        className={isFixed ? 'fixed' : ''}
      />

      {/* Search results */}
      <div id="searchResults">
        {searchResults.map(result => (
          <div key={result.id} className="job_result">
            <div className="job_info">
              {/* Display job information */}
              <p><strong>Title</strong> : {result.title}</p>
              <p><strong>Company name</strong> : {result.company_name}</p>
              <p><strong>Location</strong> : {result.location}</p>
              <p><strong>Via</strong> : {result.via}</p>
              {/* Hidden description with 'More' button */}
              <p className="description" style={{ display: 'none' }}><strong>Description</strong> : {result.description}</p>
              <button className="description-button" onClick={() => showMore(result.id)}>More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Blurrer for displaying additional details */}
      {blurrerVisible && (
        <div id="blurrer">
          <p>Title: {selectedResult.title}</p>
          {/* Render LetterComponent if blurrer is visible */}
          {blurrerVisible && (
            <LetterComponent
              onSendLetter={sendLetter}
              onRemoveLetterDiv={removeLetterDiv}
              letterFormData={letterFormData}
              setLetterFormData={setLetterFormData}
            />
          )}
        </div>
      )}
    </div>
  );
};

// Export SearchComponent
export default SearchComponent;
