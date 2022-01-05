import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
