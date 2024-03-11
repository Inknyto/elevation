import { useMemo } from 'react';


 export const useSearchResults = (query) => {
   return useMemo(() => {
     return fetchSearchResults(query);
   }, [query]);
 };
 


// export const useSearchResults = (query) => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetchSearchResults(query);
//         // Process the result or update component state
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
// 
//     fetchData();
//   }, [query]);
// };
// 
// 


export const fetchSearchResults = async (query) => {
  try {
const response = await fetch(`http://localhost:8080/elasticsearch/software_jobs/_search?q=*${query}*&size=1000`, {

  headers: {
    'Content-Type': 'application/json',
  },

});

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
 
     const data = await response.json();
     return data.hits.hits.map(offre => ({ id: offre._id, ...offre._source }));



  } catch (error) {
    console.error('Error fetching data from Elasticsearch:', error);
    return [];
  }
};

export const fetchSelectedResult = async (id) => {
  const token = sessionStorage.getItem('token')

  try {
    const response = await fetch(`http://localhost:8080/elasticsearch/software_jobs/_doc/${id}`, {
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
