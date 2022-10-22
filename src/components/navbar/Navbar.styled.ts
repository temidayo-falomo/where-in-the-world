import styled from "styled-components";

export const StyledNavbar = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

  .nav-holder {
    padding: 30px 0;
    width: 95%;
    margin: 0 auto;
  }
`;
