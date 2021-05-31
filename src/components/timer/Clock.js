import React, {  Component } from 'react'
import styled from 'styled-components'

class Clock extends Component {
    constructor(props) {
            super(props);
            this.state = {
                date: new Date()
            }
        }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {      
        return (
            <Container>
                <h4>Clock App</h4>
                <Timer>
                    {
                        this.state.date.toLocaleTimeString()
                    }
                </Timer>
            </Container>
        )
    }
}
    

export default Clock

const Container = styled.div`
    width: 100%;
    color: #fff;
    text-align: center;
    margin-top: 100px;

    h4 {
        font-size: 50px;
    }
`

const Timer = styled.div`
    width: 100%;
    margin: auto;
    color: green;
    font-size: 50px;
    font-weight: 600;
`