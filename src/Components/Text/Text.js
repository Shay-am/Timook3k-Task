import styled, { css } from "styled-components";

export const Text = styled.span`
  color: ${({ color }) => (color ? color : "black")};
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: 700;

  ${(small) =>
    small &&
    css`
      font-size: 0.7rem;
    `}

  ${(medium) =>
    medium &&
    css`
      font-size: 0.8rem;
    `}
`;
