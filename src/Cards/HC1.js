import React from "react";
import Carousel from "react-elastic-carousel";

const getFormattedTitle = () => null;
const HC1 = (props) => {
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
  const redirect = () => {
    window.location = card.url;
  };
  return (
    <div
      className="hc1 container"
      onClick={redirect}
      style={{ backgroundColor: card.bg_color }}
    >
      <Icon icon={card.icon} />
      <Title title={card.title} formatted_title={card.formatted_title} />
    </div>
  );
};

const Icon = (props) => {
  const { icon } = props;
  return (
    <div className="icon">
      <img src={icon.image_url} alt={icon.image_type} className="icon"></img>
    </div>
  );
};
const Title = (props) => {
  const { formatted_title, title } = props;
  return (
    <div className="title">{getFormattedTitle(formatted_title) || title}</div>
  );
};
export default HC1;
