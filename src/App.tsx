import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import { Title } from 'components/Title';
import { Button } from 'components/Button';
 
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const ToDoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

function App() {
  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoItem>
        <Label>리액트 공부하기</Label>
        <Button label="삭제"/>
      </ToDoItem>
    </Container>
  )
}

export default App;
