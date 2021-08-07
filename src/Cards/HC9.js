import React from "react";
import reactDom from "react-dom";
// import Cards from "../Cards";

const getFormattedTitle = () => null;
const getFormattedDescription = () => null;
const handleAction = () => null;
const handleInnerBtn = () => null;
const urlProp = (url) => `url(${url})`;
const getWidth = (aspRatio) => ``;

const HC9 = (props) => {
  const boxStyle = {
    height: `${cards.height * 1}px`,
  };
  return (
    <div className="hc9 box" style={boxStyle}>
      {cards.cards.map((card) => (
        <Item card={card} />
      ))}
    </div>
  );
};

const Item = (props) => {
  const { card } = props;
  const redirect = () => {
    window.location = card.url;
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

const cards = {
  id: 80,
  name: "New small HCs for club, transactions and store",
  design_type: "HC9",
  cards: [
    {
      name: "Club for teenagers (GenZ & GenS)",
      url: "https://youtube.com/",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/718171493a944663a167a71c11c5e10a.png",
        aspect_ratio: 0.84,
      },
    },
    {
      name: "Rewards (For all personas)",
      url: "https://viserion.fampay.in/rewards/?fp_type=fpSurvey&fp_hide_bar=true&fp_bar_color=1f1f1f&tab=2&fp_ios_webview_type=2",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/8b9c873bc2cf42a39523b589b319990a.png",
        aspect_ratio: 0.84,
      },
    },
    {
      name: "Transactions History (For all personas)",
      url: "https://google.com/",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/1f388bca015345a7ad125fc40e45d1ae.png",
        aspect_ratio: 0.84,
      },
    },
    {
      name: "Store (For all personas)",
      url: "https://",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/f8f9a6536f9a4e17aff3d25fbef3c12a.png",
        aspect_ratio: 0.84,
      },
    },
  ],
  is_scrollable: true,
  height: 78,
};
