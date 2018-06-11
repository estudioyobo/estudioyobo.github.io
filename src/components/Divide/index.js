import styled, { css } from "styled-components";

const Divide = styled.div`
  display: flex;
  align-items: center;
  margin-top: -4px;
  p {
    padding-left: 20px;
  }
  img,
  p {
    width: 50%;
  }
  ${css`
    @media (max-width: 590px) {
      flex-direction: column;
      p,
      img {
        width: 100%;
      }
      p {
        padding: 10px 0;
      }
    }
  `};
`;

export default Divide;
