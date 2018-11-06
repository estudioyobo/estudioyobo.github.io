import styled from "styled-components";

const Button = styled.button`
  background: #333;
  border: none;
  color: #f3f4f0;
  border-radius: 3px;
  padding: 10px;
  transition: all 0.1s ease-in-out;
  & :hover {
    background: #676767;
  }
`;

export default Button;
