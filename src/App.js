import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import './App.css';

const styles = {
  icon: {
    marginLeft: '5px'
  }
};

const App = () => {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            ChatMe
          </Typography>
          <Icon style={styles.icon}>people</Icon>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
