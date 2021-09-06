import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { HeroCard } from '../components/HeroCard'

export const Search = () => {

    const history = useHistory()
    const token = localStorage.getItem('accessToken')
    const APIURL = sessionStorage.getItem('APIURL')
    const [heroesList, setHeroesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.get(APIURL + '/search/' + searchTerm)
            .then(res => setHeroesList(res.data.results))
    }

    if (!token) {
        history.push('/auth')
    }


    return (
        <div>
            <h1>Search</h1>

            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} type="text" placeholder="Type a Superhero Name..." required/>
                <input type="submit" value="Search" />
            </form>
            
            {heroesList.map(hero => {
                return (
                    <HeroCard
                        key={hero.id}
                        name={hero.name}
                        image={hero.image.url}
                        stats={hero.powerstats}
                    />
                    
                )
            })}

        </div>
    )
}
