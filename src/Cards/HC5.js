import React from "react";
import Carousel from "react-elastic-carousel";

const HC5 = (props) => {
  const { cards } = props;
  return cards.is_scrollable ? (
    <Carousel
      classname="row"
      itemsToShow={1}
      pagination={false}
      showArrows={false}
      itemPadding={[10]}
    >
      {cards.cards.map((item, i) => (
        <Item card={item} key={i} />
      ))}
    </Carousel>
  ) : (
    <div className="flex-gap row" style={{ display: "flex", margin: "10px 0" }}>
      {cards.cards.map((item, i) => (
        <Item card={item} key={i} />
      ))}
    </div>
  );
};
const Item = (props) => {
  const { card } = props;
  const cardHeight = 320 / card.bg_image.aspect_ratio;
  const bgStyle = {
    backgroundImage: `url(${card.bg_image.image_url})`,
    height: cardHeight,
  };
  const redirect = () => {
    window.location = card.url;
  };
  return (
    <div className="hc5 container" onClick={redirect} style={bgStyle}></div>
  );
};

export default HC5;
