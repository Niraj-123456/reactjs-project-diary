import React from 'react'
import styled from 'styled-components'

function Clock() {
    const time = new Date().toLocaleTimeString()
    return (
        <Container>
            <h4>Clock App</h4>
            <Timer>
                Time:  
                {
                    time
                }
            </Timer>
        </Container>
    )
}

export default Clock

const Container = styled.div`
    width: 100%;
    color: #fff;
    text-align: center;
    margin-top: 100px;
    border: solid 1px #fff;

    h4 {
        font-size: 25px;
    }
`

const Timer = styled.div`
    width: 100%;
    margin: auto;
    color: #fff;
`