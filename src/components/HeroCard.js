import React, { useState } from 'react'
import '../styles/herocard.css'

export const HeroCard = (props) => {

    const [isMember, setIsMember] = useState(props.isMember)
    let statRows = []
    const {image: {url}, name, biography: {alignment}, powerstats} = props.hero

    for (const stat in powerstats) {
        statRows.push(
            <div className="stat-group">
                <h3 className="stat">
                    {powerstats[stat]}
                </h3>
                <p className="stat-name">
                    {stat}
                </p>
            </div>
        )
    }

    const handleClick = () => {
        if (isMember === false) {
            props.addMember(props.hero)
        } else {
            props.removeMember(props.hero)
        }
        setIsMember(!isMember)
    }

    return (
        <div className="hero-card">
            <hr />
            <img className="hero-card-image" src={url} alt={name} />
            <h3 className="hero-name">{name}</h3>
            <p>{alignment}</p>
            
            {statRows}

            <button onClick={handleClick}>{isMember ? 'Remove from the team' : 'Add to the team'}</button>
        </div>
    )
}
