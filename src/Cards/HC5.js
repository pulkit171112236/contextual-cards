import React from "react";
// import Cards from "../Cards";

const getFormattedTitle = () => null;
const getFormattedDescription = () => null;
const handleAction = () => null;
const handleInnerBtn = () => null;
const HC5 = (props) => {
  const card = cards.cards[0];
  return <Item card={card} />;
};
const Item = (props) => {
  const { card } = props;
  const bgStyle = {
    backgroundImage: `url(${card.bg_image.image_url})`,
  };
  return <div className="hc5 container" style={bgStyle}></div>;
};

export default HC5;

const cards = {
  id: 149,
  name: "Gamezop4",
  design_type: "HC5",
  cards: [
    {
      name: "savage revenge",
      url: "https://www.gamezop.com/g/ry6bwfUt_Jg?id=bM14MfArj&fp_type=fpGame",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/a612b3e534ba4ca389293a2b92c7ba25.jpeg",
        aspect_ratio: 2.1548822,
      },
      bg_color: "#050402",
    },
    {
      name: "Tower twist",
      url: "https://www.gamezop.com/g/HJT46GkPcy7?id=bM14MfArj&fp_type=fpGame",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/8521293693574a81ad9e1f47769ee820.jpeg",
        aspect_ratio: 2.1548822,
      },
      bg_color: "#2b1157",
    },
    {
      name: "Rocket Man",
      url: "https://www.gamezop.com/g/SyXuN7W1F?id=bM14MfArj&fp_type=fpGame",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/d9261c88c6fc4d8e9631fd53fdd1408f.jpeg",
        aspect_ratio: 2.1548822,
      },
      bg_color: "#151515",
    },
  ],
  is_scrollable: true,
};
