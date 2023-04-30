import React from 'react';
import './App.css';
import { Grid } from "@mui/material"
import Details from './components/Details/Details';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Grid container sx={{ paddingRight: '20px', paddingLeft: '20px' }} spacing={5} alignItems='center' justifyContent='center' style={{height: '100vh'}}>
        <Grid item xs={12} md={6}>
          <Main />
        </Grid>
        <Grid container spacing={'10px'} direction={'column'} item xs={12} md={6}>
          <Grid item xs={12} md={6}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Details title="Expense" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
