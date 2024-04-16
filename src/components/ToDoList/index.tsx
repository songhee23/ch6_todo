import styled from '@emotion/styled';
import { ToDoItem } from 'components/ToDoItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToDoList = () => {
    return (
        <Container>
            <ToDoItem label='리액트 공부하기'/>
            <ToDoItem label='운동하기'/>
            <ToDoItem label='책 읽기'/>
        </Container>
    )
}