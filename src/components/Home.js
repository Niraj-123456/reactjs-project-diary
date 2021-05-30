import React from 'react'
import styled from 'styled-components'
import TicTacToe from './tictactoe/TicTacToe'
import Clock from './timer/Clock'

function Home() {
    return (
        <Container>
            <TicTacToe />
            <Clock />
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
`
