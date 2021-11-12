import React from "react";
import "./categories.scss";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategories,
}) {
  const onSelectCategory = (index) => {
    onClickCategories(index);
  };

  return (
    <div className="categories">
      <section className="categories__conteiner">
        <div
          onClick={() => onSelectCategory(null)}
          className={activeCategory == null ? "categories--active" : ""}
        >
          Все
        </div>
        {items.map((name, index) => (
          <div
            onClick={() => onSelectCategory(index)}
            className={activeCategory == index ? "categories--active" : ""}
            key={`${name}_${index}`}
          >
            {name}
          </div>
        ))}
      </section>
    </div>
  );
});

export default Categories;
