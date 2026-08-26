import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import "./MenuBar.scss";

function MenuBar({
  isLoading,
  home,
  favorites,
  inputValue,
  handleChange,
  isCardView,
  setIsCardView,
  isFavoritesView,
  setIsFavoritesView,
}) {
  return (
    <div className="menu-bar">
      <nav className="menu-bar__nav">
        <span className="menu-bar__logo-placeholder-first">T</span>
        <img src="/logo.png" alt="Logo" className="menu-bar__logo" />
        <span className="menu-bar__logo-placeholder-second">now</span>
        <div className="menu-bar__list">
          <li onClick={home} className="menu-bar__list-item">
            Startseite
          </li>
          <li onClick={favorites} className="menu-bar__list-item">
            Favoriten
          </li>
        </div>
        <div className="menu-bar__icons">
          {isFavoritesView ? (
            <div className="menu-bar__icons-wrapper">
              <img
                onClick={() => setIsFavoritesView(false, home())}
                className="menu-bar__icons-wrapper-icon"
                src="/home.svg"
                alt="Startseite"
              ></img>
              <span className="menu-bar__icons-wrapper-label menu-bar__icons-wrapper-label--active">
                Startseite
              </span>
            </div>
          ) : (
            <div className="menu-bar__icons-wrapper">
              <img
                onClick={() => setIsFavoritesView(true, favorites())}
                className="menu-bar__icons-wrapper-icon"
                src="/favorite.svg"
                alt="Favoriten"
              ></img>
              <span className="menu-bar__icons-wrapper-label menu-bar__icons-wrapper-label--active">
                Favoriten
              </span>
            </div>
          )}
        </div>
      </nav>
      {isLoading && (
        <div className="menu-bar__loader">
          <Loader />
        </div>
      )}
      <div className="menu-bar__search">
        <SearchBar inputValue={inputValue} handleChange={handleChange} />
        <div className="menu-bar__view-toggle">
          {isCardView ? (
            <img
              onClick={() => setIsCardView(false)}
              className="menu-bar__list-view"
              src="/view-list.svg"
              alt="Listenansicht"
            ></img>
          ) : (
            <img
              onClick={() => setIsCardView(true)}
              className="menu-bar__card-view"
              src="/card-view.svg"
              alt="Kartenansicht"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
export default MenuBar;
