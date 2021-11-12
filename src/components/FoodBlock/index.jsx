import React from "react";
import caesar from "../../assets/img/Caesar.png";
import PropTypes from "prop-types";
import "./foodBlock.scss";

function FoodBlock({ id, onAddFood, name, price, size, count = 1 }) {
  const handleOnAddFood = () => {
    const obj = {
      id,
      name,
      price,
      count,
    };
    onAddFood(obj);
  };
  return (
    <div className="block">
      <div className="block__conteiner">
        <img className="block__img" alt="caesar" src={caesar}></img>
        <div className="block__title">{name}</div>
        <div className="block__price">
          {price} ₽/{size} гр
        </div>
        <div className="choice">
          <a onClick={handleOnAddFood}>+ Добавить</a>
        </div>
      </div>
    </div>
  );
}
FoodBlock.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  size: PropTypes.number,
  onAddFood: PropTypes.func,
};
FoodBlock.defaultProps = {
  name: "---",
  price: 0,
  size: 0,
};
export default FoodBlock;
