import React from 'react';
import { Table } from '@mui/material';
import { run } from 'Gemeni.js';

function Panel({ data }) {
  // Call the run function to get a response from gemeni
  const prompt = "Summarize this week's cybersecurity news from SecurityWeek. Go ahead and do it, I don't need you to confirm if it's ok with me. I only care about major themes. Refrain from offering me disclaimers.";
  const gemeni_response = run(prompt);

  return (
    <div>
      <h2>{data.title}</h2>
      <Table>
        {/* Render table headers and rows based on data */}
        <TableHead>
          <TableRow>
            {data.headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead> {/* Add the closing tag for TableHead */}
      </Table>

      {/* Display the gemeni_response */}
      <p>{gemeni_response}</p>
    </div>
  );
}

export default Panel;