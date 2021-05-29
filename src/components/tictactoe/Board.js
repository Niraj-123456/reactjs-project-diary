import React, { Component } from 'react'
import Square from './Square'
import styled from 'styled-components'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: Array(9).fill(null),
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
        const values = this.state.values.slice();
        if(this.calculateWinner(values) || values[i]) {
            return;
        }

        values[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            values: values,
            xIsNext: !this.state.xIsNext
        });
    }
    

    render() {
        const winner = this.calculateWinner(this.state.values);
        let status;
        if(winner) {
            status = 'winner is: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
        }

        const squares = this.state.values.map((value, i) => {
            return (
                <Square key={i} value={value} onClick={() => this.handleClick(i)} />
            )
        });
        
        // const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
        return (
            <Container>
                <Turn>{status}</Turn>
                <Content>
                    {
                        squares
                    }
                </Content>
            </Container>
        )
    }
}

export default Board

const Container = styled.div`
    width: 100%;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    height: 400px;
    width: 600px;
    margin: auto; 
`

const Turn = styled.p`

`