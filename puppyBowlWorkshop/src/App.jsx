import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Incorporate search logic here
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<AllPlayers searchQuery={searchQuery} />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
