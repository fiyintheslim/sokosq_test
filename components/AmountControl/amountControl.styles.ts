import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 4rem;
`;

export const Button = styled.button`
  border: none;
  background: var(--grayPrimary);
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    background: black;
  }
`;
