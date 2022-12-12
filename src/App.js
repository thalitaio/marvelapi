import "./App.css";
import Header from "./components/Header";
import CharacterTable from "./components/CharacterTable";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Carrossel from "./components/Carrossel";

const hash = "bbe7cdf00795fa72c1b40efb1441d3f9";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
        if (
          localStorage.getItem("favorites") === "[]" ||
          !localStorage.getItem("favorites")
        ) {
          localStorage.setItem("favorites", "[]");
          const result = await axios(
            `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=68e631226b569c7996f4e9be92925389&hash=${hash}`
          );
          console.log(result.data.data.results);
          setItems(result.data.data.results);
          setLoading(false);
        } else {
          let favorite = JSON.parse(localStorage.getItem("favorites"));
          setItems(favorite);
          setLoading(false);
        }
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=68e631226b569c7996f4e9be92925389&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      }
    };

    fetch();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Banner />
      <Carrossel />
      <div className="ctable__container">
        <h4 className="ctable__title">LISTA DE PERSONAGENS DA MARVEL</h4>
        <Search search={(q) => setQuery(q)}></Search>
        <CharacterTable items={items} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
