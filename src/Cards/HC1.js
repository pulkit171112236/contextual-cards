import React from "react";
import Carousel from "react-elastic-carousel";
const getFormattedTitle = () => null;
const HC1 = () => {
  return cards.is_scrollable ? (
    <Carousel
      classname="row"
      itemsToShow={1}
      pagination={false}
      showArrows={false}
      itemPadding={[10]}
    >
      {cards.cards.map((item) => (
        <Item card={item} />
      ))}
    </Carousel>
  ) : (
    <div className="flex-gap row" style={{ display: "flex", margin: "10px 0" }}>
      {cards.cards.map((item) => (
        <Item card={item} />
      ))}
    </div>
  );
};
const Item = (props) => {
  const { card } = props;
  return (
    <div className="hc1 container" style={{ backgroundColor: card.bg_color }}>
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

const cards = {
  id: 7,
  name: "All transactions",
  design_type: "HC1",
  cards: [
    {
      name: "View all txn",
      title: "Transactions",
      formatted_title: {
        text: "Transactions",
        entities: [],
      },
      icon: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/4ce76db9e755497f8d176764b6d590ba.png",
        aspect_ratio: 1,
      },
      url: "https://google.com/",
      bg_color: "red",
    },
    {
      name: "Rewards",
      title: "Rewards",
      formatted_title: {
        text: "Rewards",
        entities: [],
      },
      icon: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/aa7354aad52243728066169761045344.png",
        aspect_ratio: 1,
      },
      url: "https://youtube.com/",
    },
  ],
  is_scrollable: false,
};
