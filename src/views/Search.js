import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { HeroCard } from '../components/HeroCard'

export const Search = (props) => {

    const history = useHistory()
    const token = localStorage.getItem('accessToken')
    const APIURL = sessionStorage.getItem('APIURL')
    const [heroesList, setHeroesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    let teamListIds = []

    if (props.teamList) {
        teamListIds = [...props.teamList.good, ...props.teamList.bad].map(h => h.id)
    }

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
        <div style={{width: '100%'}}>
            <h1>Search</h1>

            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} type="text" placeholder="Type a Superhero Name..." required/>
                <input type="submit" value="Search" />
            </form>

            <div className="hero-card-container">
                {heroesList.map(hero => {
                    return (
                        <HeroCard
                            key={hero.id}
                            hero={hero}
                            isMember={teamListIds.includes(hero.id)}
                            addMember={props.addMember}
                            removeMember={props.removeMember}
                        />
                        
                    )
                })}
            </div>
            

        </div>
    )
}
