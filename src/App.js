import "./App.css";
import TvView from "./views/TvView";
import ScrollDot from "./components/ScrollDot/ScrollDot";

function App() {
  return (
    <div className="App">
      <ScrollDot />
      <TvView />
    </div>
  );
}

export default App;
