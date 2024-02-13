import React, { useState, useEffect } from 'react';
import { promptGemeni } from './Gemeni.js'; 

function Panel({ data }) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await promptGemeni(data.propt);
      setResponse(result);
    };

    fetchData();
  }, [data]);

  // Render the response
  return (
    <div style={{ width: `${data.size}%` }}>
      <h2>{data.id}</h2>
      {response ? <p>{response}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Panel;