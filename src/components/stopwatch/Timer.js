import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Timer() {

    const [counter, setCounter] = useState(60);

    useEffect(() => {
        // if counter is greater than or equals to 0 apply setTimeout function
        // else counter is 0 set it back to 60
        counter >= 0 ? setTimeout(() => setCounter(counter - 1), 1000) : 
        setCounter(60);
    }, [counter])

    return (
        <Container>
            <h4>Timer App Using React Hooks</h4>
            <p>{ counter }</p>
        </Container>
    )
}

export default Timer


const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    color: #fff;
    text-align: center;

    h4 {
        font-size: 50px;
    }

    p {
        font-size: 40px;
        color: green;
    }
`