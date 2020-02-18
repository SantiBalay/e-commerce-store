import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss'
import FormButton from '../FormButton/FormButton';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'


class SignIn extends Component {
    
    state = {  
        email : '',
        password : ''
    }

    handleSubmit = async e => {
        e.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        } catch(error) {
            console.error(error)
        }
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value})
    }

    
    render() { 
        {/* Le voy a poner names a los inputs y actualizar dinamicamente el state porque me parece mas elegante que usar refs :) */}

        return (  
            <div className="sign-in">
                <h2 className="title"> I have an account</h2>
                <span> Sign in with your email and password </span>

                <form className='form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" name="email" value={this.state.email} required onChange={this.handleChange} label="Email"
                    />

                    <FormInput
                        type="password" name="password" value={this.state.password} required onChange={this.handleChange} label="Password"
                    />

                    <div className="buttons">
                        <FormButton
                            type="submit" value="Submit" valor="Sign In"
                        />

                        <FormButton
                            isGoogleSignIn={true} onClick={signInWithGoogle} type="submit" value="Submit" valor="Sign in with Google"
                        />
                    </div>
                    
                  
                </form>

            </div>

        );
    }
}
 
export default SignIn;