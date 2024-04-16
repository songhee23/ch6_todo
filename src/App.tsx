import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import { Title } from 'components/Title';
import { ToDoItem } from 'components/ToDoItem';
 
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
`;


function App() {
  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoList>
        <ToDoItem label='리액트 공부하기'/>
        <ToDoItem label='운동하기'/>
        <ToDoItem label='책 읽기'/>
      </ToDoList>
    </Container>
  )
}

export default App;
