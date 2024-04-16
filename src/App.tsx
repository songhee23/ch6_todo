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



function App() {
  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoItem />
    </Container>
  )
}

export default App;
