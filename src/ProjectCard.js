import React from "react";
// Components
import Card from "react-bootstrap/Card";
// Styling sheets
import "./css/Project.css";
// Static imports
import frameTop from "./images/top.svg";
import frameBottom from "./images/bottom.svg";

function Project(props) {
  const [cardStyle, changeCardStyle] = React.useState({
    width: "80%",
    border: "none",
    opacity: "1",
  });

  const [cardImgStyle, changeCardImgStyle] = React.useState({});

  const [descriptionStyle, changeDescriptionStyle] = React.useState({
    margin: "3% 9%",
    visibility: "hidden",
    width: "100%",
  });

  const [languageIcons, changeLanguageIcons] = React.useState([]);
  React.useEffect(() => {
    (props.languages && props.languages.includes(props.languageSelected)) ||
    props.languageSelected === ""
      ? changeCardStyle({ width: "80%", border: "none", opacity: "1" })
      : changeCardStyle({ width: "80%", border: "none", opacity: "0.1" });

    if (props.languages) {
      const icons = props.languages.map((language) => (
        <img
          src={require("./images/" + language + ".png")}
          alt={language}
          width='8%'
          key={language}
          style={{ marginRight: "2%" }}
        />
      ));
      changeLanguageIcons(icons);
    }
  }, [props.languageSelected, props.languages]);

  return (
    <div
      className='ProjectCard'
      onMouseEnter={() => {
        changeDescriptionStyle({
          margin: "3% 9%",
          visibility: "visible",
          width: "100%",
        });
        changeCardImgStyle({ opacity: 0.2 });
      }}
      onMouseLeave={() => {
        changeDescriptionStyle({
          margin: "3% 9%",
          visibility: "hidden",
          width: "100%",
        });
        changeCardImgStyle({ opacity: 1 });
      }}
    >
      <Card style={cardStyle}>
        <div id='frameTop'>
          <img src={frameTop} alt='frame' width='8%' />
        </div>
        <Card.Img src={require("./images/" + props.img)} style={cardImgStyle} />
        <Card.ImgOverlay style={descriptionStyle}>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>{props.cardText}</Card.Text>
        </Card.ImgOverlay>
        <div id='frameBottom'>
          <div style={{ float: "left" }}>
            <img src={frameBottom} alt='frame' width='11%' />
          </div>
          <div style={{ float: "right" }}>{languageIcons}</div>
        </div>
      </Card>
    </div>
  );
}

export default Project;
