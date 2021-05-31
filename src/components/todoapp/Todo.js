import React, { useState } from 'react'
import styled from 'styled-components'

function Todo() {

    const [inputList, setInputList] = useState(' ');
    const [lists, setLists] = useState([]);

    const inputTextAction = (event) => {
        setInputList(event.target.value);
    }

    const handleClick = () => {
        setLists((oldLists) => {
            return [...oldLists, inputList]
        })
    }
    return (
        <Container>
            <h4>Todo App</h4>
            <Wrapper>
                <Header>
                    <h5>Todo App</h5>
                </Header>
                <Form>
                    <input type="text" placeholder="Enter a todo" onChange={inputTextAction}/>
                    <button onClick={ handleClick }>+</button>
                </Form>
                <ToDoList>
                    <ul>
                        {
                            lists.map((value, key) => {
                                return <li key={key}>{value}</li>
                            })
                        }
                    </ul>
                </ToDoList>
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
    background: #ff6fa5;
    position: absolute;
    top: 20px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    h5 {
        font-size: 18px;
    }
`

const Form = styled.form`
    position: absolute;
    width: 100%;
    top: 150px;
    left: 0%;

    input[type=text] {
        outline: none;
        border: none;
        height: 30px;
        width: 200px;
        padding: 0 10px;
        border-bottom: solid 2px #000;
        font-size: 18px;
    }

    button {
        margin: 0 15px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: green;
        border: none;
        color: #fff;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            transform: scale(1.1, 1.1);
            background: #000;
        }
    }
`

const ToDoList = styled.div`
    position: absolute;
    top: 200px;
    width: 100%;
    margin-top: 20px;
    border: solid 1px #000;
    color: black;

    ul {
        list-style: none;
    }
`