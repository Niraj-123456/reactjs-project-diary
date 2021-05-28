import React, { Component } from 'react'
import styled from 'styled-components'
import TicTacToe from './TicTacToe'

class Home extends Component {
    state = {
        pressed: false,
    }

    onBoxSelected = () => {
        this.setState((prevState, prevProps) => {
            return { pressed: !prevState.pressed }  
        });
        console.log(this.state.pressed);
    }

    render() {
        return (
            <Container>
                <TicTacToe onBoxSelected={ this.onBoxSelected } />
            </Container>
        )
    }
}

export default Home

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
`
