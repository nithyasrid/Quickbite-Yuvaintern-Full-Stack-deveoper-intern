import { money } from "../data/menu.js";

export default function FoodCard({ item, onAdd }) {
  return (
    <article className="food-card">
      <div className="food-art">
        <img
          className="food-photo"
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling.style.display = "grid";
          }}
        />
        <span className="food-emoji photo-fallback" aria-hidden="true">{item.emoji}</span>
        <span className="food-tag">{item.tag}</span>
      </div>
      <div className="food-info">
        <p className="eyebrow">{item.category}</p>
        <h3>{item.name}</h3>
        <p className="food-description">{item.description}</p>
        <div className="food-card-bottom">
          <strong>{money(item.price)}</strong>
          <button className="add-button" onClick={() => onAdd(item)} aria-label={`Add ${item.name} to bag`}>+ Add</button>
        </div>
      </div>
    </article>
  );
}
