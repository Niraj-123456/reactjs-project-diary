import React from 'react'
import styled from 'styled-components'

function Todo() {
    return (
        <Container>
            <h4>Todo App</h4>
            <Wrapper>
                <Header>
                    <h5>Todo App</h5>
                </Header>
            </Wrapper>
        </Container>
    )
}

export default Todo;

const Container = styled.div`
    width: 100%;
    text-align: center;
    color: #fff;
    margin-top: 100px;

    h4 {
        font-size: 50px;
    }
`

const Wrapper = styled.div`
    width: 500px;
    height: 600px;
    background: #fff;
    margin: auto;
    border-radius: 20px;
    position: relative;
`

const Header = styled.div`
    width: 100%;
    height: 60px;
    background: #000;
    position: absolute;
    top: 20px;
    left: 0;

    h5 {
        font-size: 15px;
    }
`