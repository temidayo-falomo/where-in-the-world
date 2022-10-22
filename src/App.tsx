import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./Globalstyles";
import { AppContext } from "./helpers/Context";
import AllCountries from "./pages/all-countries/AllCountries";
import CountryDetail from "./pages/country-detail/CountryDetail";

function App() {
  //Global States
  const [countries, setCountries] = useState<any>([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [theme, setTheme] = useState<string>("light");
  const [searchText, setSearchText] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
        theme,
        setTheme,
        countryInfo,
        setCountryInfo,
        searchText,
        setSearchText,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/detail" element={<CountryDetail />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
