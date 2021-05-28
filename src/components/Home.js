import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function Home() {
    return (
        <Container>
            <Header />
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    margin: 0;
    
    h2 {
        color: #fff;
    }
`