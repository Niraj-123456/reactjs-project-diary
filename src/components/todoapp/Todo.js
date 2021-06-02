import React, { useState } from 'react'
import styled from 'styled-components'
import ToDoLists from './ToDoLists'

function Todo() {

    const [inputList, setInputList] = useState(' ');
    const [lists, setLists] = useState([]);

    const inputTextAction = (event) => {
        setInputList(event.target.value);
    }

    const handleClick = () => {
        setLists((oldLists) => {
            return [...oldLists, inputList]
        });
        setInputList('');
    }
    const onDeleteSelected = (id) => {
        console.log("Item Deleted")

        setLists((oldLists) => {
            return oldLists.filter((itemArr, index) => {
                return index !== id;
            })
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
                    <input type="text" value={inputList} onChange={inputTextAction} placeholder="Enter a todo..."/>
                    <button onClick={ handleClick }>+</button>
                </Form>
                <ToDoList>
                    <ul>
                        {
                            lists.map((item, id) => {
                                return (
                                    <ToDoLists 
                                    key={id} 
                                    id={id} 
                                    value={item}
                                    onDelete={onDeleteSelected} />
                                )
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

const Form = styled.div`
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
    left: 0;
    top: 200px;
    width: 80%;
    margin-top: 20px;

    ul {
        list-style: none;
    }
`