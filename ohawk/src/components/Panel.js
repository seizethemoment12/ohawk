import React, { useState, useEffect } from 'react';

function Panel({ data }) {
  const [response, setResponse] = useState('Loading...');
  console.log('Panel function called'); 

  useEffect(() => {
    const fetchData = async () => {
      //const result = await promptGemeni(data.data); // Disabled while I work on state management so I don't constantly prompt gemeni.
      const result = "This is a test response";
      setResponse(result);
    };

    fetchData();
  }, [data]);

  // Render the response
  return (
    <div style={{ width: `${data.size}%` }}>
      <h2>{data.id}</h2>
      <p>{response}</p>
    </div>
  );
}

export default Panel;