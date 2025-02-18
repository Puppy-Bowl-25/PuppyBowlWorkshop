import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Incorporate search logic here
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <Router>
        <NavBar onSearch={handleSearch} clearSearch={clearSearch} />

        <Routes>
          <Route path='/' element={<AllPlayers searchQuery={searchQuery} />} />
          <Route path='/players/:id' element={<SinglePlayer />} />
          <Route path='/new-player' element={<NewPlayerForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
