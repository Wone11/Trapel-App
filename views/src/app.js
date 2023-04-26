import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core'

import Header    from './Components/Header/Header';
import Maps      from './Components/Maps/Maps';
import Details   from './Components/Details/Details';
import List      from './Components/List/List';



const app = () => {
  return (
    <>
          <CssBaseline />
          <Header />
          <Grid container spacing={3} style={{'width':'100%'}}>
           <Grid item xs={12} md ={2}>
                  <List />
           </Grid>
           <Grid item xs={12} md ={8}>
                  <Maps></Maps>
           </Grid>
           <Grid item xs={12} md ={2}>
                  <Details />
           </Grid>
          </Grid>
    </>
  );
}

export default app;
