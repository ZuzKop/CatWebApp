import TestComponent from "./components/TestComponent";
import RandomCatContent from "./components/RadomCatContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TestComponent name={"Kituś"} />
      <RandomCatContent />
    </div>
  );
}

export default App;
