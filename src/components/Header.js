import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <NavBar>
                <p>My JavaScript Project Diary</p>
            </NavBar>
        </Container>
    )
}

export default Header


const Container = styled.section`
    width: 100%;
`

const NavBar = styled.nav`
    height: 70px;
    background-color: #000;
    
    p {
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
        padding: 20px 0;
    }
`