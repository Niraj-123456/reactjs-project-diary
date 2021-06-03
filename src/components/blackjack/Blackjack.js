import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

function Blackjack() {

    const [rand, setRand] = useState(1);
    const [cardImg, setCardImg] = useState([]);

    const randomNum = () => {
        setRand(Math.floor((Math.random() * 13) + 1));
        console.log("Hit Pressed", rand)
        return rand;
    }

    const cardGenerator = () => {
        randomNum();
        setCardImg((oldCard) => {
            return[...oldCard, rand]
        })
    }

    return (
        <Container>
            <h4>BlackJack Game</h4>
            <Wrapper>
                <PlayerOne>
                    <CardSec>  
                        {/* <img src="images/cards/A.png" alt="A" />
                        <img src="images/cards/2.png" alt="2" />
                        <img src="images/cards/3.png" alt="3" />
                        <img src="images/cards/4_2.png" alt="4" /> */}
                        {
                            cardImg.map((card, id) => {
                                console.log(card);
                                return(
                                    <Card key={id} value={card}/>
                                )
                            })
                        }
                    </CardSec>
                </PlayerOne>
                <PlayerTwo>
                    <CardSec>
                        <img src="images/cards/5_2.png" alt="5" />
                        <img src="images/cards/6.png" alt="6" />
                        <img src="images/cards/7.png" alt="7" />
                        <img src="images/cards/8.png" alt="8" />
                    </CardSec>
                </PlayerTwo>
                <Buttons>
                    <button style={{background: 'green'}} onClick={cardGenerator}>Hit</button>
                    <button style={{background: 'yellow'}}>Check</button>
                    <button style={{background: 'red'}}>Reset</button>
                </Buttons>
            </Wrapper>
        </Container>
    )
}

export default Blackjack


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
    width: 900px;
    margin: auto;
    margin-top: 50px;
    height: 650px;
    display: grid;
    grid-template-columns: auto auto;
    border: solid 1px #fff;
`

const PlayerOne = styled.div`
    position: relative;

    &::before {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        content: '';
        border: solid 1px #fff;
        background-image: url('https://wallpaperaccess.com/full/2434380.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.2;
    }
`

const PlayerTwo = styled(PlayerOne)`

`

const CardSec = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    img {
        height: 150px;
        width: 100px;
        margin: 10px 20px;
        border-radius: 4px;
        z-index: 1;
    }
`

const Buttons = styled.div`
    width: 100%;
    grid-column: 1 / span 2;
    margin: auto;

    button {
        width: 100px;
        height: 50px;
        border-radius: 10px;
        margin: 0 10px;
        border: none;
        color: white;
        font-size: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:hover {
            transform: scale(1.1, 1.1);
        }
    }
`