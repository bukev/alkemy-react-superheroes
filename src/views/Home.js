import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HeroCard } from '../components/HeroCard'


export const Home = (props) => {

    const history = useHistory()
    const token = localStorage.getItem('accessToken')
    const [teamList, setTeamList] = useState([])
    const [teamStats, setTeamStats] = useState({
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0,
        avgWeight: 0,
        avgHeight: 0
    })

    if (!token) {
        history.push('/auth')
    }

    useEffect(() => {
        
        setTeamList([...props.teamList.good, ...props.teamList.bad])
        
        setTeamStats({
            
        })

    }, [props.teamList])


    console.log(props.teamList)

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
