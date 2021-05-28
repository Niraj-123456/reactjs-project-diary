// import './App.css';
import Home from './components/Home'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Container>
        <Home />
        </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`
