import Layout from "./components/Layout/Layout";
import TestComponent from "./components/TestComponent";
import RandomCatContentTabs from "./components/RandomCatContentTabs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TestComponent name={"Kituś"} />
      <Layout />
      <RandomCatContentTabs />
    </div>
  );
}

export default App;
