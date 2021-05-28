import React from 'react'
import styled from 'styled-components'

function TicTacToe(props) {

    return (
        <Container>
            <h2>Tic Tac Toe Game</h2>
            <p>Play with bot. click on the boxes to enter your move.</p>
            <Content>
                <button onClick={ props.onBoxSelected }>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </Content>
        </Container>
    )
}

export default TicTacToe


const Container  = styled.div`
    width: 80%;
    margin: auto;
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

const Content = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    button {
        height: 150px;
        background-color: transparent;
        cursor: pointer;
        border: solid 2px #fff;
        color: #fff;
        font-size: 20px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
`