import { useEffect, useState } from "react";
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
  const chachedCards = JSON.parse(localStorage.getItem(CARDS_CACHE_KEY)) || [];

  const [cards, setCards] = useState(
    chachedCards.length > 0 ? chachedCards : simpleData,
  );
  const [favorites, setFavorites] = useState(favoritesFromStorage);
  const [inputValue, setInputValue] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
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
    setFilteredCards(cards.filter((card) => favorites.includes(card.Kanal)));
  }, [favorites, cards]);

  const addToFavorites = (kanal) => {
    setFavorites((prevFavorites) => {
      const updated = [...prevFavorites, kanal];
      return updated;
    });
  };

  const removeFromFavorites = (kanal) => {
    setFavorites((prevFavorites) => {
      const updated = prevFavorites.filter((fav) => fav !== kanal);
      return updated;
    });
  };

  const handleToggleFavorite = (kanal) => {
    const isFavorite = favorites.some((fav) => fav === kanal);
    if (isFavorite) {
      removeFromFavorites(kanal);
    } else {
      addToFavorites(kanal);
    }
  };

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    const filtered = cards.filter((card) =>
      card.Kanal.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredCards(filtered);
  };

  function handleHomeClick() {
    setFilteredCards(cards);
    setInputValue("");
  }

  function handleFavoritesClick() {
    const filtered = cards.filter((card) => favorites.includes(card.Kanal));
    setFilteredCards(filtered);
    setInputValue("");
  }

  return (
    <div className="tv-view">
      <div className="tv-view__wrapper">
        {
          <MenuBar
            isLoading={isLoading}
            isCardView={isCardView}
            setIsCardView={setIsCardView}
            isFavoritesView={isFavoritesView}
            setIsFavoritesView={setIsFavoritesView}
            home={() => {
              handleHomeClick();
            }}
            favorites={() => {
              handleFavoritesClick();
            }}
            inputValue={inputValue}
            handleChange={onInputChange}
          />
        }
      </div>
      {isLoading && cards.length === 0 && <Loader />}
      <div
        className={`tv-view__cards ${isCardView ? "tv-view__cards" : "tv-view__list"}`}
      >
        {filteredCards.length === 0 && inputValue === ""
          ? cards?.map((card, index) =>
              isCardView ? (
                <Card
                  key={index}
                  card={card}
                  onToggleFavorite={() => handleToggleFavorite(card.Kanal)}
                  isFavorite={favorites.some((fav) => fav === card.Kanal)}
                />
              ) : (
                <CardVertical
                  key={index}
                  card={card}
                  onToggleFavorite={() => handleToggleFavorite(card.Kanal)}
                  isFavorite={favorites.some((fav) => fav === card.Kanal)}
                />
              ),
            )
          : filteredCards?.map((card, index) =>
              isCardView ? (
                <Card
                  key={index}
                  card={card}
                  onToggleFavorite={() => handleToggleFavorite(card.Kanal)}
                  isFavorite={favorites.some((fav) => fav === card.Kanal)}
                />
              ) : (
                <CardVertical
                  key={index}
                  card={card}
                  onToggleFavorite={() => handleToggleFavorite(card.Kanal)}
                  isFavorite={favorites.some((fav) => fav === card.Kanal)}
                />
              ),
            )}
      </div>
    </div>
  );
}
export default TvView;
