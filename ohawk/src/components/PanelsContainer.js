import React from 'react';
import { Grid } from '@mui/material';
import Panel from './Panel';

function PanelsContainer() {
  // Fetch panel data from API or state
  const prompt = "Summarize this week's cybersecurity news from SecurityWeek. Go ahead and do it, I don't need you to confirm if it's ok with me. I only care about major themes. Refrain from offering me disclaimers.";
  const g_response = run(prompt);

  const panelData = []; // Initialize panelData
  panelData.push(g_response); // Add g_response to panelData

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