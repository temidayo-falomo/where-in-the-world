import React, { useContext } from "react";
import { BsMoonFill } from "react-icons/bs";
import { AppContext } from "../../helpers/Context";
import { StyledNavbar } from "./Navbar.styled";

function Navbar() {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <StyledNavbar theme={theme}>
      <div className="nav-holder row btw">
        <h3>Where In The World?</h3>
        <div
          className="switch row center gap-5 pointer"
          onClick={() => {
            toggleTheme();
          }}
        >
          <BsMoonFill />
          Dark Mode
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
