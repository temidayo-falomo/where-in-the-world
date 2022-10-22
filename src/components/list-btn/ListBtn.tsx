import axios from "axios";
import React, { useEffect, useState } from "react";

function ListBtn(props: any) {
  const [fullCountryName, setFullCountryName] = useState<any>();

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

  return <li>{fullCountryName?.name}</li>;
}

export default ListBtn;
