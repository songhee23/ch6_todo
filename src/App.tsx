import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
`;

function App() {
  return (
    <Container>
      <Title>
        <Label>할 일 목록</Label>
      </Title>
    </Container>
  )
}

export default App;
