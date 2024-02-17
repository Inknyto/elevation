import { useMemo } from 'react';
import { credentials } from './credentials';
const { username, password } = credentials;

export const useSearchResults = (query) => {
  return useMemo(() => {
    return fetchSearchResults(query);
  }, [query]);
};

export const useSelectedResult = (id) => {
  return useMemo(() => {
    return fetchSelectedResult(id);
  }, [id]);
};

const fetchSearchResults = async (query) => {
 console.log(query, username, password)
// Biggest security flaw ever
  try {
    const response = await fetch(`http://localhost:8080/elasticsearch/software_jobs/_search?q=*${query}*&size=1000`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
	console.log(`response: ${response.json}`);
    }

    const data = await response.json();
    return data.hits.hits.map(offre => ({ id: offre._id, ...offre._source }));
  } catch (error) {
    console.error('Error fetching data from Elasticsearch:', error);
    return [];
  }
};

const fetchSelectedResult = async (id) => {
    return null;
  try {
    const response = await fetch(`http://localhost:8080/elasticsearch/software_jobs/_doc/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data._source;
  } catch (error) {
    console.error('Error fetching data from Elasticsearch:', error);
    return null;
  }
};
