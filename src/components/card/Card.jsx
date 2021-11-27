import React from 'react'
import "./card.css"

export default function Card({headline="this is a headline",content="Conent goes here hahahhaha XD",image="https://picsum.photos/200/300"}) {
    return (
        <div className="card">
            <img src={image} className="image" />
            <h2>{headline}</h2>
            <p>{content}</p>
            
        </div>
    )
}
