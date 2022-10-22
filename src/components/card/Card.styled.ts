import styled from "styled-components";

export const StyledCard = styled.div`
  /* width: 320px; */
  min-height: 400px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s ease;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

  :hover {
  }

  .image {
    height: 200px;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .info {
    margin: 0 auto;
    width: 85%;
    margin-top: 2rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .row {
      margin-bottom: 0.5rem;
    }
  }
`;
