import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';

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
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState('female');
  const [showForm, setShowForm] = useState(false)

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
      <div className={classes.flex}>
        <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm) } className={classes.button}>Register</Button>
        <Button variant="contained" color="secondary" className={classes.button}>Log in</Button>
      </div>
      {showForm ? (<FormGroup className={classes.formContainer}>
        <h3>Register</h3>
        <Input
            defaultValue="John"
            className={classes.input}
            inputProps={{
              'aria-label': 'First Name'
            }}
          />
        <Input
            defaultValue="John"
            className={classes.input}
            inputProps={{
              'aria-label': 'Last Name'
            }}
          />
        <Input
            defaultValue="John"
            className={classes.input}
            inputProps={{
              'aria-label': 'E-Mail'
            }}
          />
        <Input
            defaultValue="John"
            className={classes.input}
            inputProps={{
              'aria-label': 'Password'
            }}
          />   
          <Input
            defaultValue="John"
            className={classes.input}
            inputProps={{
              'aria-label': 'Password'
            }}
          />    
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              value={value}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox checked="true" value="checkedA" />
            }
            label="Subscribe to Newsletter"
          />
          <Button variant="contained" color="primary">Subscribe</Button>
      </FormGroup>) : ( <h1>no</h1>)}
    </div>
  );
}

export default App;
