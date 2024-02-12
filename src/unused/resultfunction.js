      {searchResults.map(result => (
        <div key={result.id}>
          {/* Display search results */}
          Title: {result.title}
          Company name: {result.company_name}
          Location: {result.location}
          Via: {result.via}
          Description: {result.description}
          <Button variant="outlined" onClick={() => showMore(result.id)}>
            More
          </Button>
        </div>
      ))}
