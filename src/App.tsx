import { Route, Routes } from "react-router";
import "./App.css";
import { Footer } from "./components/Footer";
import { PokemonList } from "./components/PokemonList";
import { PokemonPage } from "./components/PokemonPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonPage />} />
        <Route path="/" element={<PokemonList />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
