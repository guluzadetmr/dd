import React from "react";
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import model1 from "../About/Images/model_1_bg (1).jpg";
import model3 from "../About/Images/model_3_bg (2).jpg";
import model2 from "../About/Images/model_2_bg (4).jpg";
const ProductCardItem = ({ imgSrc, title }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.img}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={styles.description}>
        <h2>{title}</h2>
      </div>
      <div className={styles.edit}>
        <span className={styles.yellow}>
          <FontAwesomeIcon icon={faStar} style={{color:'rgb(248, 157, 19)'}}/> 5.0
        </span>
        <span className={styles.red}>
          <FontAwesomeIcon icon={faHeart} style={{color:'rgb(242, 58, 46)'}} /> 29
        </span>
      </div>
      <div className={styles.art}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div>
        <button className={styles.black}>CART</button>
        <button className={styles.white}>VIEW</button>
      </div>
    </div>
  );
};

const ProductCard = ({ item }) => {
  return (
    <div className={styles.firstCard}>
      <div className={styles.product}>
        <ProductCardItem imgSrc={model1} title="Wild West Hoodie" />
        <ProductCardItem imgSrc={model2} title="Wild West Hoodie" />
        <ProductCardItem imgSrc={model3} title="Wild West Hoodie" />
      </div>
    </div>
  );
};

export default ProductCard;
