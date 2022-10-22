import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListBtn from "../../components/list-btn/ListBtn";
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../helpers/Context";
import Loading from "../loading/Loading";
import { StyledCountryDetail } from "./CountryDetail.styled";
import { BiArrowBack } from "react-icons/bi";

function CountryDetail() {
  const [loading, setLoading] = useState<boolean>(true);
  const { theme, setCountryInfo, countryInfo } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v2/name/${localStorage.getItem(
          "countryName"
        )}`
      )
      .then((res) => {
        setCountryInfo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const currCountryInfo: any = countryInfo[0];

  if (loading) {
    return <Loading theme={theme} />;
  }

  return (
    <StyledCountryDetail theme={theme}>
      <Navbar />
      <div className="back">
        <Link to="/">
          <BiArrowBack />
          Back
        </Link>
      </div>

      {currCountryInfo.capital ? (
        <div className="row content-holder">
          <div
            className="left flag"
            style={{ backgroundImage: `url(${currCountryInfo?.flag})` }}
          ></div>
          <div className="right col ">
            <h2>{currCountryInfo?.name}</h2>
            <div className="row tbc" style={{ gap: "4rem" }}>
              <div className="ls col gap-1">
                <div className="row gap-5">
                  <h4>Native Name: </h4>
                  <span> {currCountryInfo?.nativeName}</span>
                </div>

                <div className="row gap-5">
                  <h4>Population: </h4>
                  <span> {currCountryInfo?.population?.toLocaleString()}</span>
                </div>

                <div className="row gap-5">
                  <h4>Region: </h4>
                  <span> {currCountryInfo?.region}</span>
                </div>

                <div className="row gap-5">
                  <h4>Sub Region: </h4>
                  <span> {currCountryInfo?.subregion}</span>
                </div>

                <div className="row gap-5">
                  <h4>Capital: </h4>
                  <span> {currCountryInfo?.capital}</span>
                </div>
              </div>

              <div className="rs col gap-1" style={{ marginLeft: "2rem" }}>
                <div className="row gap-5">
                  <h4>Top Level Domain: </h4>
                  <span> {currCountryInfo?.topLevelDomain}</span>
                </div>

                <div className="row gap-5">
                  <h4>Currencies: </h4>
                  <span> {currCountryInfo?.currencies[0]?.name}</span>
                </div>

                <div className="row gap-5">
                  <h4>Languages: </h4>
                  <span>
                    {currCountryInfo?.languages?.map((data: any) => {
                      return <span key={data.name}>{data.name}</span>;
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-countries row">
              {currCountryInfo?.borders?.length !== 0 && (
                <h4>Border Countries: </h4>
              )}
              <ul className="row center gap-1">
                {currCountryInfo?.borders?.map((data: any, index: number) => {
                  return <ListBtn key={index} data={data} />;
                })}
                {currCountryInfo?.borders?.length === 0 ||
                !currCountryInfo?.borders ? (
                  <li>None</li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h2 style={{ width: "95%", margin: "1rem auto" }}>
          There Is Not Enough Information on this Country.
        </h2>
      )}
    </StyledCountryDetail>
  );
}

export default CountryDetail;
