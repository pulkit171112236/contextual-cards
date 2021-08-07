import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import useLongPress from "./useLongPress";

const getFormattedTitle = (obj) => null;
const getFormattedDescription = (obj) => null;
const HC3 = (props) => {
  const { cards } = props;
  const [vis, setVis] = useState(true);
  const handleRemindLater = () => {
    console.log("remind");
    setVis(false);
  };
  const handleDismiss = () => {
    console.log("dismiss");
    setVis(false);
  };
  if (!vis) return <div></div>;
  return cards.is_scrollable ? (
    <Carousel
      classname="row"
      itemsToShow={1}
      pagination={false}
      showArrows={false}
      itemPadding={[10]}
    >
      {cards.cards.map((item, i) => (
        <Item
          card={item}
          handleRemindLater={handleRemindLater}
          handleDismiss={handleDismiss}
          key={i}
        />
      ))}
    </Carousel>
  ) : (
    <div style={vis ? {} : { display: "none" }} className="flex-gap row">
      {cards.cards.map((item, i) => (
        <Item
          card={item}
          handleRemindLater={handleRemindLater}
          handleDismiss={handleDismiss}
          key={i}
        />
      ))}
    </div>
  );
};
const Item = (props) => {
  const { card, handleDismiss, handleRemindLater } = props;
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
      <ActionPanel
        visPanel={visPanel}
        handleRemindLater={handleRemindLater}
        handleDismiss={handleDismiss}
      />
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
  const { visPanel, handleRemindLater, handleDismiss } = props;
  return (
    <div
      className="left action-panel"
      style={visPanel ? {} : { display: "none" }}
    >
      <div className="btn-container" onClick={handleRemindLater}>
        <button className="btn">Remind Later </button>
      </div>
      <div className="btn-container" onClick={handleDismiss}>
        <button className="btn">Dissmiss</button>
      </div>
    </div>
  );
};

export default HC3;
