import React from 'react'
import Square from './Square'
import styled from 'styled-components'

function Board(props) {

    const squares = props.values.map((value, i) => {
        return (
            <Square key={i} value={value} onClick={() => props.onClick(i)} />
        )    
    });
    
    return (
        <Container>
            <Content>
                {
                    squares
                }   
            </Content>
        </Container>
    )
}

export default Board

const Container = styled.div`
    width: auto;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border: solid 1px #fff;
`