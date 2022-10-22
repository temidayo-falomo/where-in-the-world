import styled from "styled-components";

export const StyledCards = styled.div`
  width: 95%;
  margin: 0 auto;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem; */
  display: grid;
  /* grid-auto-rows: 300px; */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
`;
