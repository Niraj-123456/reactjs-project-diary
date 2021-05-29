import React from 'react'
import styled from 'styled-components'
import Board from './Board'

function TicTacToe() {
    return (
        <Container>
            <h2>Tic Tac Toe Game</h2>
            <p>Play with bot. click on the boxes to enter your move.</p>
            <Board />
        </Container>
    )
}

export default TicTacToe


const Container  = styled.div`
    width: 100%;
    margin-top: 50px;

    h2, p {
        color: #fff;
        text-align: center;
        font-size: 30px;
        font-weight: 300;
    }

    p {
        font-size: 15px;
    }
`