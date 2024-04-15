import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import { Title } from 'components/Title';
 
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;


const Button = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

function App() {
  return (
    <Container>
      <Title label="할 일 목록" />
      <Button onClick={() => console.log('test')}>삭제</Button>
    </Container>
  )
}

export default App;
