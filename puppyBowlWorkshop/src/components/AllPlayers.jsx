import React from "react";
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API/index.js";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const playersData = await fetchAllPlayers();
        console.log("Fetched players:", playersData);
        setPlayers(playersData);
      } catch (error) {
        console.error("Failed to fetch players:", error);
      }
    };

    getPlayers();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      <div className="players-container">
        {players.length > 0 ? (
          players.map((player) => (
            <div key={player.id} className="player-card">
              <img src={player.imageUrl} alt={player.name} />
              <h4>{player.name}</h4>
              <p>{player.breed}</p>
              <p>Team ID: {player.teamId ? player.teamId : "No Team"}</p>
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
