import React from "react";
import styles from "./SelectCategory.module.css";

const CarouselItem = ({ category, onClick, selected }) => {
  return (
    <div
      className={
        selected
          ? styles.SelectedItem + " " + styles.CarouselItem
          : styles.CarouselItem
      }
      onClick={onClick}
    >
      <img alt="" src={require(`../../assets/icons/${category.id}.png`)}></img>
      <p>{category.name}</p>
    </div>
  );
};

export default CarouselItem;
