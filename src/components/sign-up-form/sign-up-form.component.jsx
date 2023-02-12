import { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component.jsx";

import { registerUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils.js";

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await registerUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth( user, { displayName });
            resetFormFields();
        } catch(error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('email already exists!');
            } else {
                console.log('There is an error creating user:', error);
            }
        }
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign Up</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label='Display Name' 
                type='text' 
                required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName}
            />
            
            <FormInput 
                label='Email' 
                type='email' 
                required 
                onChange={handleChange} 
                name="email" 
                value={email}
            />

            <FormInput 
                label='Password' 
                type='password' 
                required 
                onChange={handleChange} 
                name="password" 
                value={password}
            />

            <FormInput 
                label='Confirm Password' 
                type='password' 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword}
            />

            <Button type='submit' > SIGN UP</Button>
        </form>
      </div>  
    );
}

export default SignUpForm;