import styled from "styled-components";

const TeamworkHero = styled.div`
  height: 100vh;
  color: #56ef98;
  padding: 10rem;
  text-align: center;
  position: relative;
  margin-bottom: 50px;

  & ::before {
    content: "";
    background-size: cover;
    background-image: url("http://img2.rtve.es/v/4668478?w=1600&preview=1531953977002.jpg");
    filter: grayscale(100%);
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  & h1 {
    font-size: 6rem;
  }
`;

export default TeamworkHero;
