import React, { Component } from 'react'
import styled from 'styled-components'
import Board from './Board'

class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                values: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }

    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const values = current.values.slice();
        if(this.calculateWinner(values) || values[i]) {
            return;
        }
        values[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                values: values,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }
    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.values);
        const finalMove = 9;

        const moves = history.map((step, move) => {
            const desc = move ? 'Go ot move #' + move :
            'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{ desc }</button>
                </li>      
            )
        })
        let status;
        if(winner) {
            status = 'winner is: ' + winner;
            console.log('winner is', winner); 
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
            if(this.state.stepNumber === finalMove) {
                status = 'Draw';
            }
        }
        return (
            <Container>
                <h2>Tic Tac Toe Game</h2>
                <p>Play with bot. click on the boxes to enter your move.</p>
                <p>{ status }</p>
                <Game>
                    <Board values={current.values} onClick={(i) => this.handleClick(i) }/>
                    <Moves>
                        <p>Moves</p>
                        <ol>
                            {
                                moves   
                            }
                        </ol>
                    </Moves>
                </Game>
            </Container>
        )
    }
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

const Game = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

const Moves = styled.div`

    p {
        color: #fff;
        font-size: 20px;
        text-align: center;
    }

    ol {
        list-style: none;

        li {
            color: #fff;
            text-align: center;
        }
    }
`