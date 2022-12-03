import styled from "styled-components";

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, 1fr)`};
  grid-template-rows: ${({ length }) => `repeat(${length}, 1fr)`};
  padding: 10px 10px;
  width: 80vw;
  height: 50vh;

  pointer-events: ${({ isCLickedChecked }) =>
    isCLickedChecked ? "none" : "initial"};

  border: 2px solid black;

  @media (max-width: 868px) {
    width: 100vw;
  }
`;

export const TextHeading = styled.h2`
  text-align: center;
  margin: 10px;
`;