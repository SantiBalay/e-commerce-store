import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';

import { auth, createUserProfile} from '../../firebase/firebase.utils'

import './SignUp.scss'


class SignUp extends Component {
    
   
    state = {  
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state
 
        if ( password !== confirmPassword) {
            alert('Passwords dont natch')
            return
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email,password)

            await createUserProfile(user,{displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(error) {
            console.error(error)
        }

    }

    handleChange = e => {
        const { name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    
    
    render() { 

        const {displayName, email, password, confirmPassword} = this.state

        return ( 
            <div className="sign-up">
                <h2 className='title'> I do not have an account </h2>
                <span> Sign Up with your email and password</span>

                <form className='form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} required label='Display Name'/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} required label='Email'/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} required label='Password'/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} required label='Confirm password'/>

                    <FormButton type='submit' valor="Sign In"/>
                </form>
            </div>
         );
    }
}
 
export default SignUp;