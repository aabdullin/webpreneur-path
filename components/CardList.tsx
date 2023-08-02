import React from "react";
import Card from "./Card";

interface CardData {
  name: string;
  photo: string;
  description: string;
  link: string;
  category: string;
}

interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card pitch={""} key={card.name} {...card} />
      ))}
    </div>
  );
};

export default CardList;
