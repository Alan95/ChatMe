import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import RegisterForm from './components/RegisterForm';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//TO-DO: make constant
const useStyles = makeStyles(theme => ({
  icon: {
    marginLeft: '5px',
  },
  button: {
    margin: theme.spacing(1),
  },
  flex: {
    justifyContent: 'center',
    display: 'flex'
  },
  input: {
    marginBottom: theme.spacing(2)
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justify:'center'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

const App = () => {
  const classes = useStyles()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            ChatMe
          </Typography>
          <Icon className={classes.icon}>people</Icon>
        </Toolbar>
      </AppBar>
      <Container className={classes.heroContent}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Chat with everyone.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
          It&apos;s invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
      </Container>
      <div className={classes.flex}>
        <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm) } className={classes.button}>Register</Button>
        <Button variant="contained" color="secondary" className={classes.button}>Sign in</Button>
      </div>
      {showForm ? <RegisterForm/> : null}
    </div>
  );
}

export default App;
