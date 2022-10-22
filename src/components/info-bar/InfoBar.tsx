import axios from "axios";
import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { AppContext } from "../../helpers/Context";
import { StyledInfoBar } from "./InfoBar.styled";

function InfoBar() {
  const { theme, searchText, setSearchText, setCountries } =
    useContext(AppContext);

  const filterCountries = (param: any) => {
    if (param === "all") {
      axios
        .get("https://restcountries.com/v2/all")
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://restcountries.com/v2/region/${param}`)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <StyledInfoBar theme={theme}>
      <div className="left row center">
        <BsSearch />
        <input
          type="text"
          placeholder="Search for a country or capital..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="filter">
        <select
          name="select"
          id="dropdown"
          onChange={(e) => {
            filterCountries(e.target.value);
            setSearchText("");
          }}
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </StyledInfoBar>
  );
}

export default InfoBar;
