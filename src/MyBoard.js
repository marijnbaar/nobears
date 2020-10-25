// import './App.css';
import React from "react";
import Card from './Card.js'
import './MyBoard.css'

const imageArray = [
  {
    src: "https://i.ibb.co/SX76sdN/Group-43.png",
    alt: "black-bear"
  },
  {
    src: "https://i.ibb.co/JkYRXLh/Group-44.png",
    alt: "alles-vangen-we-af"
  },
  {
    src: "https://i.ibb.co/HVcTFxL/Mask-Group-4.png",
    alt: "geweer"
  },
  {
    src: "https://i.ibb.co/6v3kfTS/Mask-Group-7.png",
    alt: "cor-met-geweer"
  },
  {
    src: "https://i.ibb.co/DMLJ3wp/Mask-Group-11.png",
    alt: "handschoenen"
  },
  {
    src: "https://i.ibb.co/r2Zgt46/Group-45.png",
    alt: "verstopte-beer"
  },
  {
    src: "https://i.ibb.co/JQfGyrC/Group-46.png",
    alt: "groen-nobears"
  },
  {
    src: "https://i.ibb.co/R7s4ybk/Mask-Group-9.png",
    alt: "bijl"
  },
  {
    src: "https://i.ibb.co/ncSb3fx/Mask-Group-6.png",
    alt: "lamp"
  },
  {
    src: "https://i.ibb.co/wS9fcx8/Group-47.png",
    alt: "jacht"
  },
  {
    src: "https://i.ibb.co/VMwSYG3/Group-49.png",
    alt: "hoedje"
  },
  {
    src: "https://i.ibb.co/Tt9W4T1/Group-48.png",
    alt: "illustratie-geweer"
  },
  {
    src: "https://i.ibb.co/DLz21YQ/Mask-Group-10.png",
    alt: "hond"
  },
  {
    src: "https://i.ibb.co/5Kwtdfn/Mask-Group-3.png",
    alt: "vacht"
  },
  {
    src: "https://i.ibb.co/BnC6f3s/Mask-Group-8.png",
    alt: "cor-met-hond"
  },
  {
    src: "https://i.ibb.co/Z19bmLq/Mask-Group-5.png",
    alt: "muis"
  },
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
