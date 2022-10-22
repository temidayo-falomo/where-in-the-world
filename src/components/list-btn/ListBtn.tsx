import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helpers/Context";
import { StyledListBtn } from "./ListBtn.styled";

function ListBtn(props: any) {
  const [fullCountryName, setFullCountryName] = useState<any>();
  const { setCountryInfo } = useContext(AppContext);

  const getNewCountry = (param: any) => {
    localStorage.setItem("countryName", param);

    axios
      .get(
        `https://restcountries.com/v2/name/${localStorage.getItem(
          "countryName"
        )}`
      )
      .then((res) => {
        setCountryInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/alpha/${props.data}`)
      .then((res) => {
        setFullCountryName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledListBtn onClick={() => getNewCountry(fullCountryName?.name)}>
      {fullCountryName?.name}
    </StyledListBtn>
  );
}

export default ListBtn;
