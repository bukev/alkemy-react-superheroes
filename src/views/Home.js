import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { HeroCard } from '../components/HeroCard'


export const Home = (props) => {

    const history = useHistory()
    const token = localStorage.getItem('accessToken')
    const [teamList, setTeamList] = useState([])

    if (!token) {
        history.push('/auth')
    }

    useEffect(() => {
        
        setTeamList([...props.teamList.good, ...props.teamList.bad])

        return () => {
            setTeamList([])
        }

    }, [props.teamList])


    console.log(teamList)

    return (
        <div>
            <h1>Your Team</h1>
            <div className="hero-card-container">
                {teamList.map(hero => {
                    return (
                        <HeroCard
                            key={hero.id}
                            hero={hero}
                            isMember={true}
                            addMember={props.addMember}
                            removeMember={props.removeMember}
                        />
                        
                    )
                })}
            </div>
        </div>
    )
}
