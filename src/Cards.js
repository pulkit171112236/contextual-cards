import React, { useEffect, useState } from "react";
import HC1 from "./Cards/HC1.js";
import HC3 from "./Cards/HC3.js";
import HC6 from "./Cards/HC6.js";
import HC5 from "./Cards/HC5.js";
import HC9 from "./Cards/HC9.js";
const Cards = () => {
  const url = "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad";
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <center>loading</center>;
  else {
    var parsedData = JSON.parse(data);
    var cardSet = {};
    for (let cardData of parsedData["card_groups"]) {
      cardSet[cardData.design_type] = cardData;
    }
    // console.log(parsedData);
    return (
      <div>
        <HC3 cards={cardSet["HC3"]} />
        <HC6 cards={cardSet["HC6"]} />
        <HC5 cards={cardSet["HC5"]} />
        <HC9 cards={cardSet["HC9"]} />
        <HC1 cards={cardSet["HC1"]} />
      </div>
    );
  }
};

export default Cards;
