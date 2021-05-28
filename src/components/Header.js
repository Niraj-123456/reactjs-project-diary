import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <NavBar>
                <p>My JavaScript Project Diary</p>
                <Icon>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram "></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </Icon>
            </NavBar>
        </Container>
    )
}

export default Header


const Container = styled.div`
    width: 100%;
`

const NavBar = styled.nav`
    height: 70px;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    p {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 20px;
    }
`

const Icon = styled.div `
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin: 0 15px;

    a {
        text-decoration: none;
        padding: 5px 10px;
        transition: all 0.2s ease-in;

        i {
            font-size: 25px;
            color: #fff;
        }

        &:hover {
            transform: scale(1.2, 1.2);
        }
    }

`