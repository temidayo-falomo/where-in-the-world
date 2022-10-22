import React, { useContext, useEffect } from "react";
import { AppContext } from "../../helpers/Context";
import Card from "../card/Card";
import { StyledCards } from "./Cards.styled";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards() {
  const { countries, searchText } = useContext(AppContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
          return (
            <div key={data?.numericCode} data-aos="fade-up">
              <Card {...data} />
            </div>
          );
        })}
    </StyledCards>
  );
}

export default Cards;
