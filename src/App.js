// import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`
