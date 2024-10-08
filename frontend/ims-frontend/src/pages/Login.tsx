import React, { useEffect, useState } from 'react'
import './css/Login.css'
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'


// type LoginProps = {
//   email: string,
//   password: string    
// }

type LoginFieldsProps = {
  formik: any;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
};


export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  //Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If user is already authenticated, navigate to the dashboard
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);


  // Set up Formik with validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('login details', values);
      // Reset the form or make an API call here
      localStorage.setItem('token', JSON.stringify(values))
      navigate('/dashboard', {replace: true})
      formik.resetForm();
    }
  });

  return (
    <div className='loginPage__container'>
      <h2>IMS</h2>

      <form 
        className='loginForm__container'
        onSubmit={formik.handleSubmit}>
        <LoginFields
          formik={formik}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
        />

      <Link to='/signup'>Create Account</Link>
      
      <Button
        variant='contained'
        fullWidth
        style={{
          backgroundColor: 'var(--orange)',
          textTransform: 'capitalize'
        }}
        type='submit'
      >
        Login
      </Button>
      
      </form>
    </div>
  )
}


const LoginFields: React.FC<LoginFieldsProps> = ({ formik, showPassword, handleClickShowPassword, handleMouseDownPassword }) => {
  

  return(
    <div className='login__fields'>
      <TextField
        label='Email'
        variant='outlined'
        size='small'
        fullWidth
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <FormControl size='small' variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        {formik.touched.password && formik.errors.password && (
          <FormHelperText style={{ color: 'red' }}>{formik.errors.password}</FormHelperText>
        )}
      </FormControl>
    </div>
  )
}
