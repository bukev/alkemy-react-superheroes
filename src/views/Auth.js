import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export const Auth = (props) => {

    const history = useHistory()
    const token = localStorage.getItem('accessToken')

    const [formState, setFormState] = useState({});
    const APIURL = 'http://challenge-react.alkemy.org/'

    const handleFormSubmit = (event) => {
        
        event.preventDefault()

        const reqBody = {
            email: formState.email,
            password: formState.password
        }

        if (formState.email && formState.password) {

            axios.post(APIURL, reqBody)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('accessToken', res.data.token)
                    }

                    history.push('/')
                })
                .catch(() => console.log('invalid email or password'))
            
        }
    }

    const handleInputChange = (event) => {

        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    if (token) {
        history.push('/')
    }
    
    return (
        <div className="login">
            <form onSubmit={handleFormSubmit}>
            <label>
                Email
                <input onChange={handleInputChange} name="email" type="text" required/>
            </label>
            <label>
                Password
                <input onChange={handleInputChange} name="password" type="password" required/>
            </label>

            <input type="submit" value="Login" className="submit-button" />
            </form>

        </div>
    )
}
