import React, { useState } from 'react'
import '../styles/herocard.css'

export const HeroCard = (props) => {

    const [isMember, setIsMember] = useState(false)
    let statRows = []

    for (const stat in props.stats) {
        statRows.push(
            <div className="stat-group">
                <h3 className="stat-name">
                    {stat}
                </h3>
                <p className="stat">
                    {props.stats[stat]}
                </p>
            </div>
        )
    }


    return (
        <div className="hero-card">
            <hr />
            <img className="hero-card-image" src={props.image} alt={props.name} />
            <h3 className="hero-name">{props.name}</h3>
            
            {statRows}

            <button onClick={() => setIsMember(!isMember)} >{isMember ? 'Remove from the team' : 'Add to the team'}</button>
        </div>
    )
}
