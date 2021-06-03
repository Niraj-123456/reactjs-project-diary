import React from 'react'

function Card(props) {
    return (
        <div>
            <img src={`images/cards/${props.value}.png`} alt="A" />
        </div>
    )
}

export default Card
