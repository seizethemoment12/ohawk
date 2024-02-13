import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Panel from './Panel';

function PanelsContainer() {
  console.log('PanelContainer function called'); 

  const promptNews = "Summarize this week's cybersecurity news from SecurityWeek.";
  const promptTech = "Summarize this week's tech news.";
  const promptSports = "Summarize this week's sports news.";
  const promptEntertainment = "Summarize this week's entertainment news.";

  const [panelData, setPanelData] = useState([]);
  
  // Create the panels to be used when the page loads
  useEffect(() => {
    setPanelData([
      { size: 3, id: 'newsPanel', data: promptNews },
      { size: 3, id: 'techPanel', data: promptTech },
      { size: 3, id: 'sportsPanel', data: promptSports },
      { size: 3, id: 'entertainmentPanel', data: promptEntertainment },
    ]);
  }, []);

  // Display the panels
  return (
    <Grid container spacing={2}>
      {panelData.map((panel) => (
        <Grid item xs={panel.size} key={panel.id}>
          <Panel data={panel} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PanelsContainer;