import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import { Title } from 'components/Title';
import { DataView } from 'components/DataView';
import { useState } from 'react';
 
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

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
    </Container>
  )
}

export default App;
