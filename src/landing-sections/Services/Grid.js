import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(6, auto) minmax(0, 1fr);
`;

export const Title = styled.h4`
  grid-row: 2;
  font-family: "Crimson Text";
  font-weight: 400;
  font-style: italic;
  font-size: 55px;
  line-height: 60px;
  margin: 0;
  grid-column: ${({ right }) => (right ? "10 / 13" : "3 / 6")};
  color: ${({ color }) => color};
`;

export const Description = styled.p`
  grid-row: 3;
  grid-column: ${({ right }) => (right ? "10 / 13" : "3 / 6")};
`;

export const Services = styled.ul`
  grid-row: 3 / 6;
  grid-column: ${({ right }) => (right ? "1 / 9" : "7 / 15")};
  background: #333;
  color: white;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 80px 0 40px;
  margin: 0;
`;

export const ServiceCol1 = styled.div`
  grid-column: ${({ right }) => (right ? "3 / 5" : "2 / 4")};
`;
export const ServiceCol2 = styled.div`
  grid-column: ${({ right }) => (right ? "6 / 8" : "5 / 7")};
`;
export const ServiceItem = styled.li`
  margin-bottom: 40px;
  font-weight: bold;

  & > ul {
    color: #f3f4f0;
    list-style: none;
  }
`;

export const Image = styled.img`
  grid-row: 5 / 8;
  grid-column: ${({ right }) => (right ? "7 / 15" : "1 / 7")};
  align-self: end;
`;
export const Space = styled.div`
  height: ${({ height }) => height}px;
  grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
`;

export const Fill = styled.div`
  grid-row: ${({ right }) => (right ? "7 / 8" : "6 / 7")};
  grid-column: ${({ right }) => (right ? "6 / 10" : "2 / 7")};
  background: lightgray;
  height: 200px;
`;
