import styled from "styled-components";

export const StyledAllCountries = styled.div`
  background-color: ${(props: any) =>
    props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
  min-height: 100vh;
  transition: .5s ease;
`;
