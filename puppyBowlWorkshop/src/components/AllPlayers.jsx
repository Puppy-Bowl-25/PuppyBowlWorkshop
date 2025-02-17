import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers, deletePlayer } from "../API/index.js";
import SearchBar from "./SearchBar.jsx";

const AllPlayers = ({ searchQuery }) => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await fetchAllPlayers();
        console.log("Fetched players:", data);
        setPlayers(data);
        setFilteredPlayers(data);
      } catch (error) {
        console.error("Failed to fetch players:", error);
      }
    }

    getPlayers();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPlayers(players);
    } else {
      setFilteredPlayers(players.filter((player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }
  }, [searchQuery, players]);

  const handleDelete = async (playerId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this player?");
    if (!confirmDelete) return;

    try {
      const success = await deletePlayer(playerId);
      if (success) {
        const updatedPlayers = players.filter(player => player.id !== playerId);
        setPlayers(updatedPlayers);
        setFilteredPlayers(updatedPlayers);

        alert("Player deleted successfully!");
      } else {
      alert("Failed to delete player. Please try again.");
      } 
    } catch (error) {
      console.error("Error deleting player:", error);
    }
    };


  return (
    <div>
      <h1>Puppy Players</h1>
      <div className="players-container">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div key={player.id} className="player-card">
              <img src={player.imageUrl} alt={`Image of ${player.name}`} />
              <h4>{player.name}</h4>
              <p>{player.breed}</p>
              <button type="button" onClick={() => navigate(`/players/${player.id}`)}>
                See Player Details
              </button>
              <button type="button" onClick={() => handleDelete(player.id)}>
                Delete Player
              </button>
            </div>
          ))
        ) : (
            <p>Loading players...</p>
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
