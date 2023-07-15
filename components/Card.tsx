import "../css/card.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CardProps {
  name: string;
  photo: string;
  description: string;
  link: string;
  pitch: string;
}

const Card: React.FC<CardProps> = ({
  name,
  photo,
  description,
  pitch,
  link,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderContent = () => {
    if (isClient) {
      return (
        <>
          <h3 className="card__name">{name}</h3>
          <p className="card__description">{description}</p>
          <p className="card__description">{pitch}</p>
        </>
      );
    }
    return (
      <>
        <div className="card__loading">Loading...</div>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card__image">
        <Image
          src={photo}
          alt={name}
          className="card__photo"
          width={500}
          height={500}
        />
      </div>
      <div className="card__content">{renderContent()}</div>
      <a
        href={link}
        className="card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
    </div>
  );
};

export default Card;
