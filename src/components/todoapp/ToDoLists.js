import React from 'react'
import styled from 'styled-components'

function ToDoLists(props) {
    return (
        <List>
            <li>{props.value}</li>
            <i className="fas fa-times-circle" onClick={() => props.onDelete(props.id)}></i>
        </List>
    )
}

export default ToDoLists


const List = styled.div`
    li {
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
            display: inline-block;
            margin: 5px 0;
            color: green;
        }

        i {
            margin: 0 5px;
            cursor: pointer;
            color: red;
            font-size: 20px;

            &:hover {
                transform: scale(0.9, 0.9);
            }
        }
`