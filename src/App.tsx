import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import { DataView } from 'components/DataView';
import { useState } from 'react';
import { ToDoInput } from 'components/ToDoInput';


 
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책읽기'
  ]);

  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter((item) => item !== toDo));
  };

  const onAdd = (toDo : string) => {
    setToDoList([...toDoList, toDo])
  }

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <ToDoInput onAdd={onAdd} />
    </Container>
  )
}

export default App;
