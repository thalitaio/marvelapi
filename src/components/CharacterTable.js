import React from "react";
import CharacterItem from "./CharacterItem";
import "./characterTable.css";

const CharacterTable = ({ items, isLoading }) => {
  return isLoading ? (
    <h4 className="ctable__loading">Loading</h4>
  ) : (
    <section className="contents">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterTable;
