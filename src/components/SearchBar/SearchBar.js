import "./SearchBar.scss";

const SearchBar = ({ inputValue, handleChange }) => {
  return (
    <div className="search-container">
      <div className="search-container__icon-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="search-container__icon"
        >
          <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
        </svg>
      </div>
      <input
        type="text"
        className="search-container__input"
        placeholder="Suchen..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
