import React from 'react';
import { Grid } from '@mui/material';
import Panel from './Panel';

function PanelsContainer() {
  // Fetch panel data from API or state
  const panelData = []; // Replace with actual data

  return (
    <Grid container spacing={2}>
      {panelData.map((panel) => (
        <Grid item xs={panel.size} key={panel.id}>
          <Panel data={panel.data} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PanelsContainer;