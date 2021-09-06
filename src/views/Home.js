import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'


export const Home = () => {

    const history = useHistory()
    const token = localStorage.getItem('accessToken')

    if (!token) {
        history.push('/auth')
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
