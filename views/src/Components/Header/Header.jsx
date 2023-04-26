import React from 'react';
import {Autocomplete, autocomplete} from '@react-google-maps/api'

import { AppBar,Toolbar, Typography,InputBase,Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <>
          <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                  <Typography variant="h5" className={classes.title}>
                      Drug Store Finder
                  </Typography>
                  <Box display="flex">
                      <Typography variant="h6" className={classes.details}>
                         Explore New Place
                      </Typography>
                      <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search..." className={{root:classes.inputRoot,input:classes.classes.inputInput}}/>
                        </div>
                      </Autocomplete>
                  </Box>
              </Toolbar>
          </AppBar>
    </>
  );
}

export default Header;
