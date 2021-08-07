import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import useLongPress from "./useLongPress";

const getFormattedTitle = (obj) => null;
const getFormattedDescription = (obj) => null;
const HC3 = (props) => {
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
  const [width, setWidth] = useState("100%");
  const [visPanel, setVisPanel] = useState(false);
  const bgStyle = {
    backgroundImage: `url(${card.bg_image.image_url})`,
    width,
  };
  const handleActionButton = () => {
    if (visPanel) {
      setVisPanel(false);
      setWidth("100%");
    } else {
      setVisPanel(true);
      setWidth("50%");
    }
  };
  return (
    <div
      className="hc3 wrapper"
      style={{ display: "flex" }}
      {...useLongPress(handleActionButton)}
    >
      <ActionPanel visPanel={visPanel} />
      <div className="hc3 container" style={bgStyle}>
        <Title title={card.title} formatted_title={card.formatted_title} />
        <Description
          description={card.description}
          formatted_description={card.formatted_description}
        />
        <ActionButton cta={card.cta[0]} />
      </div>
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
  const { text, bg_color, text_color, url } = props.cta;
  const handleActionButton = props.handleActionButton;
  const redirect = (e, cta) => {
    window.location = url;
  };
  return (
    <div
      className="action-btn-container"
      style={{ backgroundColor: bg_color }}
      onClick={redirect}
    >
      <button style={{ color: text_color }} className="action-btn">
        {text}
      </button>
    </div>
  );
};

const ActionPanel = (props) => {
  const { visPanel } = props;
  return (
    <div
      className="left action-panel"
      style={visPanel ? {} : { display: "none" }}
    >
      <div className="btn-container">
        <button className="btn">Remind Later</button>
      </div>
      <div className="btn-container">
        <button className="btn">Dissmiss</button>
      </div>
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
