import { useMemo } from 'react';
// import { authenticateUser } from '../Login/Authentication.js';
// Maybe implement a better handling of the token retrieval
const token = sessionStorage.getItem('token')


// const token = await authenticateUser('user1', 'password1');

export const useEntreprisesResults = (query) => {
  return useMemo(() => {
    return fetchEntreprisesResults(query);
  }, [query]);
};

// export const useSelectedResult = (id) => {
    // return fetchSelectedResult(id);
// };

// export const useSelectedResult = (id) => {
//   return useMemo(() => {
//     return fetchSelectedResult(id);
//   }, [id]);
// };

const fetchEntreprisesResults = async (query) => {
 // console.log(query, username, password)
// Biggest security flaw ever
  try {
    const response = await fetch(`http://localhost:8080/elasticsearch/senegal_entreprises_data/_search?q=*${query}*&size=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
	// console.log(`response: ${response.json}`);
    }

    const data = await response.json();
    return data.hits.hits.map(offre => ({ id: offre._id, ...offre._source }));
  } catch (error) {
    console.error('Error fetching data from Elasticsearch:', error);
    return [];
  }
};

export const fetchSelectedResult = async (id) => {
    //return null;
	console.log('hi from server: ',id)
  try {
    const response = await fetch(`http://localhost:8080/elasticsearch/senegal_entreprises_data/_doc/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
	  console.log(data._source.title)
    return data._source;
  } catch (error) {
    console.error('Error fetching data from Elasticsearch:', error);
    return null;
  }
};
