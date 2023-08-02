"use client";
import React, { useState } from "react";
import CardList from "../../components/CardList";
import FilterButtons from "../../components/FilterButtons";
import { cardsData } from "@/card-data";
import "./../../css/card.css";
import GoogleAnalytics from "./GoogleAnalytics";

const categories = [
  "All",
  "Freelance Web Development",
  "Paid Ads",
  "Building & Flipping websites / Affiliate marketing",
  "Buy Online business",
  "SEO",
  "Web Design",
  "Ecommerce - Amazon FBA",
];

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCards =
    activeCategory === "All"
      ? cardsData
      : cardsData.filter((card) => card.category === activeCategory);

  return (
    <div>
      <GoogleAnalytics trackingId="G-WXVY2NJVV2" />
      <FilterButtons
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <CardList cards={filteredCards} />
    </div>
  );
};

export default HomePage;
