import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./Card.scss";
import { useState } from "react";
import { sliceText } from "../../sliceText";

function Card({ card, onToggleFavorite, isFavorite }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={`card ${isFlipped ? "card--flipped" : ""}`}>
      <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
      <div
        className="card-wrapper"
        onPointerCancel={() => setIsFlipped(false)}
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        <img
          className="card-wrapper__image"
          src={card.KanalLogo}
          alt="Card Symbol"
        />
      </div>

      <div className="card-header">
        <div className="card-header__left">
          <img
            className="card-header__symbol"
            src={card.KanalLogo}
            alt="Card Symbol"
          />
          <span className="card-header__name">{card.Kanal}</span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body__top">
          <p className="card-body__top-programm">{card.now.Program}</p>
          <p className="card-body__top-time">
            <span className="card-body__top-time-start">{card.now.Start}</span>{" "}
            - <span className="card-body__top-time-end">{card.now.End}</span>
            <span className="card-body__top-category">
              {card.now.Category === "" ? "Allgemein" : card.now.Category}
            </span>
          </p>
          <progress
            className="card-body__top-progress"
            value={card.now.Progress}
            max={100}
          />
        </div>
        <div className="card-body__bottom">
          <div className="card-body__bottom-info">
            <div className="card-body__bottom-wrapper">
              <p className="card-body__bottom-wrapper-programm">
                <span className="card-body__bottom-wrapper-programm-name">
                  <span className="card-body__bottom-wrapper-programm-label">
                    Danach:
                  </span>{" "}
                  {sliceText(card.after.Program, 54)}
                </span>
              </p>
            </div>
            <span className="card-body__bottom-time-start">
              {card.after.Start}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
