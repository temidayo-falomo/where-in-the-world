import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../helpers/Context";
import { StyledCard } from "./Card.styled";

function Card(props: any) {
  let navigate = useNavigate();
  const { theme } = useContext(AppContext);

  const handleNavigateToCountry = (param: any) => {
    navigate(`/detail`);
    localStorage.setItem("countryName", param);
  };

  return (
    <StyledCard
      onClick={() => handleNavigateToCountry(props.name)}
      theme={theme}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${props.flag})` }}
      ></div>

      <div className="info">
        <h3>{props.name}</h3>

        <div className="row gap-5">
          <h4>Population: </h4>
          <span> {props.population.toLocaleString()}</span>
        </div>
        <div className="row gap-5">
          <h4>Region: </h4>
          <span> {props.region}</span>
        </div>
        <div className="row gap-5">
          <h4>Capital: </h4>
          <span>
            {props.capital} {!props.capital && "None"}
          </span>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
