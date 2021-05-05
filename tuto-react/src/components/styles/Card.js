import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  background-color: white;
  box-shadow: 0px 0px 50px black;
  border-radius: 5px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column
    min-height: 1px;
    padding: 1.25rem
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  line-height: 25px;
  color: black;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  background-color: green;
  color: white;
  line-height: 25px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
`;
