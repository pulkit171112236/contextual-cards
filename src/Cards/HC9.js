import React from "react";

const urlProp = (url) => `url(${url})`;

const HC9 = (props) => {
  const { cards } = props;
  const boxStyle = {
    height: `${cards.height * 1}px`,
  };
  return (
    <div className="hc9 box" style={boxStyle}>
      {cards.cards.map((card, i) => (
        <Item card={card} key={i} />
      ))}
    </div>
  );
};

const Item = (props) => {
  const { card } = props;
  const redirect = () => {
    if (card.url) window.location = card.url;
  };
  const bgStyle = {
    backgroundImage: urlProp(card.bg_image.image_url),
    width: "100%",
  };
  return (
    <div onClick={redirect} style={bgStyle} className="hc9 container"></div>
  );
};

export default HC9;
