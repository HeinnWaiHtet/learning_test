import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hello from "./components/Hello";
import FpComponent from "./components/function_components/FpComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Hello name="HWH" />
      <FpComponent></FpComponent>
      <Counter></Counter>
    </div>
  );
}

export default App;
