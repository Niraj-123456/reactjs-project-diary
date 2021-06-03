import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Card2 from './Card2'

function Blackjack() {

    // Random number generator
    const randNumGen = () => {
        let randNumber = Math.floor((Math.random() * 13) + 1)
        return randNumber;
    }

    const cards = { '1': 'A', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', 
                    '10': '10', '11': 'J', '12': 'Q', '13': 'K' }

    const [rand, setRand] = useState(randNumGen());
    const [cardImg, setCardImg] = useState([]);
    const [cardImg2, setCardImg2] = useState([]);
    const [sum, setSum] = useState(0);


    const randomNum = () => {
        setRand(randNumGen());
    }

    // Calculate the total sum of value of card
    // const cardSum = () => {
    //     setSum(sum + rand)
    // }

    // Human player card generator
    const cardGenerator = () => {
        randomNum();
        setCardImg((oldCard) => {
            return[...oldCard, rand]
        })

        setSum(sum + rand)
    }

    console.log(sum);

    // Computer player card generator
    const cardGenerator2 = () => {
        randomNum();
        setCardImg2((oldCard) => {
            return[...oldCard, rand]
        })
    }

    return (
        <Container>
            <h4>BlackJack Game</h4>
            <Wrapper>
                <PlayerOne>
                    <p>{sum <= 21 ? sum : 'Burst'}</p>
                    <CardSec>  
                        {
                            cardImg.map((card, id) => {
                                return(
                                    <Card key={id} value={card} sum={sum}/>
                                )
                            })
                        }
                    </CardSec>
                </PlayerOne>
                <PlayerTwo>
                    <CardSec>
                        {
                            cardImg2.map((card, id) => {
                                console.log(card);
                                return(
                                    <Card2 key={id} value={card}/>
                                )
                            })
                        }
                    </CardSec>
                </PlayerTwo>
                <Buttons>
                    <button style={{background: 'green'}} onClick={cardGenerator}>Hit</button>
                    <button style={{background: 'yellow'}} onClick={cardGenerator2}>Check</button>
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
        width: 100%;
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