import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import InfoBar from "../../components/info-bar/InfoBar";
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../helpers/Context";
import Loading from "../loading/Loading";
import { StyledAllCountries } from "./AllCountries.styled";

function AllCountries() {
  const [loading, setLoading] = useState<boolean>(true);
  const { theme, setCountries, setSearchText } = useContext(AppContext);

  //API Request & Update countries State
  useEffect(() => {
    setSearchText("");
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Loading theme={theme} />;
  }

  return (
    <StyledAllCountries theme={theme}>
      <Navbar />
      <InfoBar />
      <Cards />
    </StyledAllCountries>
  );
}

export default AllCountries;
