import React from 'react';
import { Table } from '@mui/material';

function Panel({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      <Table>
        {/* Render table headers and rows based on data */}
      </Table>
    </div>
  );
}

export default Panel;