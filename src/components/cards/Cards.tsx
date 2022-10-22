import React, { useContext } from "react";
import { AppContext } from "../../helpers/Context";
import Card from "../card/Card";
import { StyledCards } from "./Cards.styled";

function Cards() {
  const { countries, searchText } = useContext(AppContext);

  return (
    <StyledCards>
      {countries
        ?.filter((data: any) => {
          if (searchText === "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(searchText.toLowerCase()) ||
            data.capital?.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return data;
          }
        })
        .map((data: any) => {
          return <Card {...data} key={data?.numericCode} />;
        })}
    </StyledCards>
  );
}

export default Cards;
