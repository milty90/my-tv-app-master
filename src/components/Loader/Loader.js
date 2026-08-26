import "./Loader.scss";
function Loader() {
  return (
    <div className="loader">
      <p className="loader__text">Loading</p>
      <div className="loader__lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;
