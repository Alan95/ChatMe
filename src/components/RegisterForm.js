import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


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
  }));

const RegisterForm = () => {
  const classes = useStyles()
  const [value, setValue] = useState('female')
  const [showForm, setShowForm] = useState(false)
  const [chosenCountry, setChosenCountry] = useState()
  const [defaultCountries, setDefaultCountries] = useState([])
  const [checkNewsletter, setCheckNewsletter] = useState(false)

  useEffect(() => {
    getCountries();  
  }, []);

  const getCountries = async e => {
    try {
      let res = await axios.get('https://api.printful.com/countries')
      let countries = res.data.result.map((item) => {
        return item['name']
      })

      setDefaultCountries(countries)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = name => event => {
    setChosenCountry(event.target.value)
  }

  const handleCheckbox = name => event => {
    setCheckNewsletter(event.target.checked)
  }

  return (
    <FormGroup className={classes.formContainer}>
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
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-country">Country</InputLabel>
        <Select
        native
        value={chosenCountry}
        onChange={handleChange}
        input={<Input id="select-country" />}
        >
        {defaultCountries.map(country => (
            <option value={country} key={country}>{country}</option>
        ))}
        </Select>
      </FormControl>  
      <FormControlLabel
        control={
        <Checkbox checked={checkNewsletter} onChange={handleCheckbox(checkNewsletter)} value="checkedA" />
        }
        label="Subscribe to Newsletter"
      />
      <Button variant="contained" color="primary">Subscribe</Button>
    </FormGroup>
  );
}

export default RegisterForm;