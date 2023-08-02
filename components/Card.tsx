import "../css/card.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";

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
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
          <Typography variant="body2">{pitch}</Typography>
        </>
      );
    }
    return (
      <Typography variant="body2" color="textSecondary">
        Loading...
      </Typography>
    );
  };

  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={photo} alt={name} />
      <CardContent>{renderContent()}</CardContent>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </Link>
    </MuiCard>
  );
};

export default Card;
