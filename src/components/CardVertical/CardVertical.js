import "./CardVertical.scss";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
export default function CardVertical({ card, onToggleFavorite, isFavorite }) {
  return (
    <div className="card-vertical">
      <div className="card-left">
        <img
          className="card-left__symbol"
          src={card.KanalLogo}
          alt="Card Symbol"
        />
      </div>

      <div className="card-body">
        <div className="card-body__top">
          <div className="card-body__top-header">
            <p className="card-body__top-name">{card.Kanal}</p>
            <p className="card-body__top-programm">{card.now.Program}</p>

            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={onToggleFavorite}
            />
          </div>

          <div className="card-body__top-wrapper">
            <p className="card-body__top-wrapper-time">
              <span>{card.now.Start}</span> - <span>{card.now.End}</span>
            </p>
            <p className="card-body__top-wrapper-category">
              {card.now.Category === "" ? "Allgemein" : card.now.Category}
            </p>
          </div>

          <progress
            className="card-body__top-progress"
            value={card.now.Progress}
            max={100}
          />
        </div>
        <div className="card-body__bottom">
          <p className="card-body__bottom-programm">
            <span className="card-body__bottom-programm-label">Danch: </span>
            {card.after.Program}
          </p>
          <p className="card-body__bottom-time">
            <span>{card.after.Start}</span>
          </p>
        </div>
      </div>
      <div className="card-right">
        <img
          className="card-right__picture"
          src={card.now.Thumbnail}
          alt="Card Symbol"
        />
      </div>
    </div>
  );
}
