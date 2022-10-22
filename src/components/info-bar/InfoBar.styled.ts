import styled from "styled-components";

export const StyledInfoBar = styled.div`
  width: 95%;
  margin: 4rem auto;
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
    padding-left: 20px;
    border-radius: 10px;
    width: 500px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;

    input {
      width: 100%;
      color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

      ::-webkit-input-placeholder {
        color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      }

      :-ms-input-placeholder {
        color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      }

      ::placeholder {
        color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      }
    }
  }

  .filter {
    padding: 5px;
    padding-right: 25px;
    background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    select {
      padding: 10px 20px;
      border: none;
      background-color: transparent;
      outline: none;
      width: 100%;
      color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
    }
  }

  input {
    padding: 20px;
    border: none;
    width: 350px;
    background-color: transparent;
  }

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .left {
      width: 100%;
    }
  }
`;
