import React, { useState } from 'react'
import './css/Signup.css'
import { Link } from 'react-router-dom'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type SignupForm = {
    firstname: string
    lastname: string
    email: string
    password: string
}

type SignupFieldsProps = {
    form: SignupForm;
    handleInputChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Signup() {
    const [form, setForm] = useState<SignupForm>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleSignup = () => {
        console.log('Form data:', form);
        // Add your signup logic here

        setForm({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        })
    }

  return (
    <div className='signupPage__container'>
        <Link to='/login'>{'< Back to login'}</Link>

        <SignupFields
            form = { form }
            handleInputChanges = { handleInputChanges }
        />

        <Button
            variant='contained'
            style={{
                backgroundColor: 'var(--orange)',
                textTransform: 'capitalize'
            }}
            fullWidth
            onClick={handleSignup}
        >
            Signup
        </Button>
    </div>
  )
}


const SignupFields: React.FC<SignupFieldsProps> = ({ form, handleInputChanges}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return(
        <div className='signup__fields'>
            <TextField 
                name='firstname'
                label='First Name'
                variant='outlined'
                size='small'
                value={form.firstname}
                onChange={handleInputChanges}
            />

            <TextField 
                name='lastname'
                label='Last name'
                variant='outlined'
                size='small'
                value={form.lastname}
                onChange={handleInputChanges}
            />

            <TextField 
                name='email'
                label='Email'
                variant='outlined'
                size='small'
                value={form.email}
                onChange={handleInputChanges}
            />
            
            <FormControl 
                size='small' 
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChanges}
                />
            </FormControl>

        </div>
    )
}