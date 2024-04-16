import styled from '@emotion/styled';
import { Button } from 'components/Button';

const Container = styled.div`
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

export const ToDoItem = () => {
    return (
        <Container>
        <Label>리액트 공부하기</Label>
        <Button label="삭제"/>
      </Container>
    );
};