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
      margin: theme.spacing(1.5)
    },
  }));

const RegisterForm = () => {
  const classes = useStyles()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "female",
    country: "",
    newsletter: false 
  });
  const [value, setValue] = useState('female')
  const [chosenCountry, setChosenCountry] = useState()
  const [defaultCountries, setDefaultCountries] = useState([])
  const [checkNewsletter, setCheckNewsletter] = useState(false)

  useEffect(() => {
    getCountries();  
  }, []);

  const getCountries = async e => {
    try {
      let res = await axios.get('https://api.printful.com/countries')
      setDefaultCountries(res.data.result.map((item) => {
        return item['name']
      }))
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleChecked = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    return
  }

  const { firstName, lastName, email, password, 
          confirmPassword, gender, country, newsletter } = formData;

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h3>Register</h3>
      <Input
        value={firstName}
        onChange={handleChange}
        placeholder="First name"
        type="text"
        name="firstName"
        className={classes.input}
        inputProps={{
        'aria-label': 'First Name'
        }}
      />
      <Input
        value={lastName}
        onChange={handleChange}
        placeholder="Last name"
        type="text"
        name="lastName"
        className={classes.input}
        inputProps={{
        'aria-label': 'Last Name'
        }}
      />
      <Input
        value={email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        name="email"
        className={classes.input}
        inputProps={{
        'aria-label': 'E-Mail'
        }}
      />
      <Input
        value={password}
        onChange={handleChange}
        placeholder="Enter Password"
        type="password"
        name="password"
        className={classes.input}
        inputProps={{
        'aria-label': 'Password'
        }}
      />   
      <Input
        value={confirmPassword}
        onChange={handleChange}
        placeholder="Verify Password"
        type="confirmPassword"
        name="confirmPassword"
        className={classes.input}
        inputProps={{
        'aria-label': 'Password'
        }}
      />    
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender"
          value={gender}
          onChange={handleChange}
        >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <InputLabel htmlFor="select-country">Country</InputLabel>
      <FormControl className={classes.formControl}>
        <Select
          native
          value={country}
          name="country"
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
          <Checkbox 
            checked={newsletter} 
            name="newsletter" 
            value={newsletter} 
            onChange={handleChecked}
          />
        }
        label="Subscribe to Newsletter"
      />
      <Button variant="contained" color="primary" type="submit">Register</Button>
    </form>
  );
}

export default RegisterForm;