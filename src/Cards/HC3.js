import React from "react";
// import Cards from "../Cards";

const getFormattedTitle = (obj) => null;
const getFormattedDescription = (obj) => null;
const handleActionButton = () => null;
const HC3 = (props) => {
  const card = cards.cards[0];
  return <Item card={card} />;
};
const Item = (props) => {
  const { card } = props;
  const bgStyle = {
    backgroundImage: `url(${card.bg_image.image_url})`,
  };
  return (
    <div className="hc3 container" style={bgStyle}>
      <Title title={card.title} formatted_title={card.formatted_title} />
      <Description
        description={card.description}
        formatted_description={card.formatted_description}
      />
      <ActionButton handleActionButton={handleActionButton} />
    </div>
  );
};
const Title = (props) => {
  const { formatted_title, title } = props;
  return (
    <div className="title">{getFormattedTitle(formatted_title) || title}</div>
  );
};
const Description = (props) => {
  const { description, formatted_description } = props;
  return (
    <div className="description">
      {getFormattedDescription(formatted_description) || description}
    </div>
  );
};
const ActionButton = (props) => {
  const { handleActionButton } = props;
  return (
    <div className="action-btn-container" style={{}}>
      <button className="action-btn" onClick={handleActionButton}>
        Action
      </button>
    </div>
  );
};

export default HC3;

const cards = {
  id: 4,
  name: "Add money",
  design_type: "HC3",
  cards: [
    {
      name: "Add money",
      title: "Your account looks empty!",
      formatted_title: {
        text: "Your {} looks {}!",
        entities: [
          {
            text: "Account",
            color: "#FFFF00",
          },
          {
            text: "empty",
            color: "#FF0000",
          },
        ],
      },
      description: "Add some money to your account to get started.",
      formatted_description: {
        text: "Add some money to your account to get started.",
        entities: [],
      },
      url: "https://facebook.com/",
      bg_image: {
        image_type: "ext",
        image_url:
          "https://westeros-staging.s3.amazonaws.com/media/images/generic/5e97239d1bd747878828852d4f397361.png",
        aspect_ratio: 0.9142857,
      },
      bg_color: "#FFB486",
      cta: [
        {
          text: "Add",
          bg_color: "#000000",
          text_color: "#FFFFFF",
          url: "https://instagram.com/",
        },
      ],
    },
  ],
  is_scrollable: false,
};
