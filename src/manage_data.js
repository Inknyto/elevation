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

