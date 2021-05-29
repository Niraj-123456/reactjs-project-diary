import React from 'react'
import styled from 'styled-components'

function Square(props) {

        return (
            <Content>
                <button onClick={ props.onClick }>{ props.value }</button>
            </Content>
        )
}

export default Square

const Content = styled.div`
    width: 100%;
    margin: auto;

    button {
        height: 150px;
        width: 200px;
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
