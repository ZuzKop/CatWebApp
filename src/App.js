import TestComponent from "./components/TestComponent";
import CatFact from "./components/CatFact/CatFact";
import CatPicture from "./components/CatPicture/CatPicture";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TestComponent name={"Kituś"} />
      <CatPicture />
      <CatFact />
    </div>
  );
}

export default App;
