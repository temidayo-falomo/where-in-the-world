import styled from "styled-components";

export const StyledCountryDetail = styled.div`
  background-color: ${(props: any) =>
    props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"};
  color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
  min-height: 100vh;
  overflow: hidden;
  transition: 0.5s ease;

  .back {
    margin: 4rem auto;
    width: 95%;
    padding-top: 4rem;

    a {
      box-shadow: ${(props: any) =>
        props.theme === "light"
          ? "rgba(0, 0, 0, 0.16) 0px 1px 4px"
          : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"};

      padding: 8px 12px;
      width: 100px;
      min-width: 100px !important;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      background-color: ${(props: any) =>
        props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
    }
  }

  .left {
    max-width: 600px;
    min-width: 600px;
    height: 500px;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    object-fit: contain;
  }

  .content-holder {
    margin: 1rem auto;
    width: 95%;
    align-items: flex-start;
    gap: 2rem;
  }

  .right {
    align-items: flex-start;
    padding-left: 8%;
    margin: 1rem;

    h2 {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    ul {
      padding-left: 1rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      li {
        padding: 5px 8px;
        border-radius: 5px;
        background-color: brown;
        min-width: 80px;
        display: grid;
        place-content: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        background-color: ${(props: any) =>
          props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
        color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

        :hover {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }

  .border-countries {
    margin-top: 2rem;
    align-items: flex-start;
  }

  @media (max-width: 1400px) {
    .left {
      margin: initial auto;
      align-self: center;
      width: 90%;
      min-width: 350px;
      max-height: 400px;
    }
    .content-holder {
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    .tbc {
      flex-direction: column;
      gap: 1rem !important;
    }

    .rs {
      margin-left: 0 !important;
    }
  }
`;
