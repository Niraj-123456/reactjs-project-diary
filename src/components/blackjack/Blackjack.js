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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const [rand, setRand] = useState(randNumGen());
    const [cardImg, setCardImg] = useState([]);
    const [cardImg2, setCardImg2] = useState([]);
    const [sum, setSum] = useState(0);
    const [sum2, setSum2] = useState(0);
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(true);
    const [btn3, setBtn3] = useState(true);
    const [winner, setWinner] = useState('');
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [draw, setDraw] = useState(0);


    const randomNum = () => {
        setRand(randNumGen());
    }

    // Score Checker for human player
    const scoreChecker1 = () => {
        if(sum <= 21) {
            return setSum(sum + rand);
        } else {
            return;
        }
    }

    // Human player card generator
    const cardGenerator = () => {
        randomNum();
        scoreChecker1();
        if(sum <= 21) {
            setCardImg((oldCard) => {
                return[...oldCard, rand]
            })
        } else {
            return;
        }
        setBtn2(false);
    }

    // Score checker for computer player
    const scoreChecker2 = () => {
        if(sum2 <= 21) {
            return setSum2(sum2 + rand);
        } else {
            return;
        }
    }

    // Computer player card generator
    async function cardGenerator2() {
        randomNum();
        if(sum2 < 16 && btn2 === false) {
            setCardImg2((oldCard) => {
                return [...oldCard, rand]
                });
                scoreChecker2();
                await sleep(1000);
        }else {
            computerWinner();
            setBtn1(true);
            setBtn3(false);
        }
       return;   
    }

    console.log(sum2)

    const computerWinner = () => {
        if(sum <= 21) {
            if(sum > sum2 || sum2 > 21) {
                setWinner("You Won");
                setWins(wins + 1);
            } else if(sum < sum2) {
                setWinner("Computer Won");
                setLosses(losses + 1);
            } else if(sum === sum2) {
                setWinner("Draw");
                setDraw(draw + 1);
            }
        } else if(sum > 21 && sum2 <= 21) {
            setWinner("Computer Won");
            setLosses(losses + 1);
        } else if(sum > 21 && sum2 > 21) {
            setWinner("Draw");
            setDraw(draw + 1);
        } 
    }

    const resetGame = () => {
        setSum(0);
        setSum2(0);
        setCardImg([]);
        setCardImg2([]);
        setBtn1(false);
        setBtn2(true);
        setBtn3(true);
        setWinner('');
    }

    return (
        <Container>
            <h4>BlackJack Game</h4>
            <p>{winner ? winner: ''}</p>
            <Wrapper>
                <PlayerOne>
                    <p>Score: {sum <= 21 ? sum : 'BUST'}</p>
                    <CardSec>  
                        {
                            !cardImg ? 'null' : cardImg.map((card, id) => {
                                return(
                                    <Card key={id} value={card} sum={sum}/>
                                )
                            })
                        }
                    </CardSec>
                </PlayerOne>
                <PlayerTwo>
                    <p>Score: {sum2 <= 21 ? sum2 : 'BUST'}</p>
                    <CardSec>
                        {
                            !cardImg ? ' ' : cardImg2.map((card, id) => {
                                return(
                                    <Card2 key={id} value={card}/>
                                )
                            })
                        }
                    </CardSec>
                </PlayerTwo>
                <Buttons>
                    <button style={{background: 'green'}} onClick={cardGenerator} disabled={btn1}>Hit</button>
                    <button style={{background: 'yellow'}} onClick={cardGenerator2} disabled={btn2}>Check</button>
                    <button style={{background: 'red'}} onClick={resetGame} disabled={btn3}>Reset</button>
                </Buttons>
                <ScoreBoard>
                    <table>
                        <thead>
                            <tr>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Draw</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{wins}</td>
                                <td>{losses}</td>
                                <td>{draw}</td>
                            </tr>
                        </tbody>
                    </table>
                </ScoreBoard>
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

const ScoreBoard = styled.div`
    width: 20%;
    margin: auto;
    height: 80px;
    grid-column: 1 / span 2;

    table, th, td {
        text-align: center;
        border: solid 1px #fff;
        border-collapse: collapse;
        width: 100%;
        height: 100%;
    }

    th, td {
        width: 100px;
    }
`