import React, { useState } from "react";

import CardProductRecomendations from "../../components/common/card_produk_recomendation";
import ArrowRight from "../../assets/images/arrow_right.svg";
import ArrowLeft from "../../assets/images/arrow_left.svg";

const Recomendation = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    { id: 1, image: "image1", title: "Card 1" },
    { id: 2, image: "image2", title: "Card 2" },
    { id: 3, image: "image3", title: "Card 3" },
    //...
  ];

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <div
      className="flex flex-col items-start"
      style={{ paddingLeft: 310, paddingTop: 63 }}
    >
      <div className="font-bold font-inter text-black" style={{ fontSize: 40 }}>
        Must-Have Items
      </div>
      <div className="flex flex-row row-auto">
        <img src={ArrowLeft} alt="arrow left" onClick={handlePreviousCard} />
        <div style={{ width: 52 }}></div>
        {cards.map((card, index) => (
          <CardProductRecomendations
            key={card.id}
            image={card.image}
            title={card.title}
            isActive={index === currentCard}
          />
        ))}
        <div style={{ width: 52 }}></div>
        <img src={ArrowRight} alt="arrow right" onClick={handleNextCard} />
      </div>
    </div>
  );
};

export default Recomendation;