import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
`;

export const Title = () => {
  return (
    <Container>
      <Label>할 일 목록</Label>
    </Container>
  );
};
