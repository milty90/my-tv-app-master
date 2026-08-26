import { useEffect, useMemo, useState } from "react";
import Card from "../components/Card/Card";
import CardVertical from "../components/CardVertical/CardVertical";
import MenuBar from "../components/MenuBar/MenuBar";
import { fetchTvData, simpleData } from "../services/tvApi";
import "./TvView.scss";
import Loader from "../components/Loader/Loader";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../services/localStorage";

const CARDS_CACHE_KEY = "tv_cards_cache";

function TvView() {
  const favoritesFromStorage = getFromLocalStorage() || [];
  const cachedCards = JSON.parse(localStorage.getItem(CARDS_CACHE_KEY)) || [];

  const [cards, setCards] = useState(
    cachedCards.length > 0 ? cachedCards : simpleData,
  );
  const [favorites, setFavorites] = useState(favoritesFromStorage);
  const [inputValue, setInputValue] = useState("");
  const [isCardView, setIsCardView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavoritesView, setIsFavoritesView] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchTvData();
        if (data?.data?.length > 0) {
          setCards(data.data);
          localStorage.setItem(CARDS_CACHE_KEY, JSON.stringify(data.data));
        }
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    saveToLocalStorage(favorites);
  }, [favorites]);

  const displayedCards = useMemo(() => {
    let result = isFavoritesView
      ? cards.filter((card) => favorites.includes(card.Kanal))
      : cards;

    const q = inputValue.trim().toLowerCase();
    if (q) {
      result = result.filter((card) => card.Kanal.toLowerCase().includes(q));
    }

    return result;
  }, [cards, favorites, isFavoritesView, inputValue]);

  const handleToggleFavorite = (kanal) => {
    setFavorites((prev) =>
      prev.includes(kanal)
        ? prev.filter((fav) => fav !== kanal)
        : [...prev, kanal],
    );
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleHomeClick() {
    setIsFavoritesView(false);
    setInputValue("");
  }

  function handleFavoritesClick() {
    setIsFavoritesView(true);
    setInputValue("");
  }

  return (
    <div className="tv-view">
      <div className="tv-view__wrapper">
        <MenuBar
          isLoading={isLoading}
          isCardView={isCardView}
          setIsCardView={setIsCardView}
          isFavoritesView={isFavoritesView}
          setIsFavoritesView={setIsFavoritesView}
          home={handleHomeClick}
          favorites={handleFavoritesClick}
          inputValue={inputValue}
          handleChange={onInputChange}
        />
      </div>

      {isLoading && cards.length === 0 && <Loader />}

      <div className={`tv-view__cards ${isCardView ? "" : "tv-view__list"}`}>
        {displayedCards.map((card) =>
          isCardView ? (
            <Card
              key={card.Kanal}
              card={card}
              onToggleFavorite={() => handleToggleFavorite(card.Kanal)}
              isFavorite={favorites.includes(card.Kanal)}
            />
          ) : (
            <CardVertical
              key={card.Kanal}
              card={card}
              onToggleFavorite={() => handleToggleFavorite(card.Kanal)}
              isFavorite={favorites.includes(card.Kanal)}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default TvView;
