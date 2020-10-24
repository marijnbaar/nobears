import './App.css';
import React from "react";
import Card from './Card.js'

const imageArray = [
  {
    src: "https://picsum.photos/id/1021/705/460",
    alt: "mountains"
  }

]

  function MyBoard() {
  const [card, setCard] = React.useState(null);
  const cardClick = (event) => {
    setCard(event.target.src)
  }
  function closeCard() {
    setCard(null);
  }

  return (
    <div className="board">
      {card ? <Card src={card} closeCard={closeCard} /> : null}
      <div className="container">
        {imageArray.map(image => (
          <div className="thumbnail">
            <img onClick={cardClick} src={image.src} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </div>
  );
}


export default MyBoard;
