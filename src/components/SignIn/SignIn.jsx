import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss'
import FormButton from '../FormButton/FormButton';


class SignIn extends Component {
    
    state = {  
        email : '',
        password : ''
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            email : '',
            password : ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value})
    }

    
    render() { 
        {/* Le voy a poner names a los inputs y actualizar dinamicamente el state porque me parece mas elegante que usar refs :) */}

        return (  
            <div className="sign-in">
                <h2> I have an account</h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" name="email" value={this.state.email} required onChange={this.handleChange} label="Email"
                    />

                    <FormInput
                        type="password" name="password" value={this.state.password} required onChange={this.handleChange} label="Password"
                    />
                    <FormButton
                        type="submit" value="Submit" valor="Sign In"
                    />
                </form>

            </div>

        );
    }
}
 
export default SignIn;