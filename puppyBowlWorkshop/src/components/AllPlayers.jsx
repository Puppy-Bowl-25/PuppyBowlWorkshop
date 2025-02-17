import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers, deletePlayer } from "../API/index.js";

const AllPlayers = ({ searchQuery }) => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

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

  let filteredPlayers = players;
  if (searchQuery) {
    filteredPlayers = players.filter((player) => {
      const playerName = player.name.toLowerCase();
      const query = searchQuery.toLowerCase();
      return playerName.includes(query);
    });
  }

  const handleDelete = async (playerId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this player?");
    if (!confirmDelete) return;
    try {
      const success = await deletePlayer(playerId);
      if (success) {
        setPlayers(players.filter((player) => player.id !== playerId));
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
      <h1>All Players</h1>
      <div className='players-container'>
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div key={player.id} className='player-card'>
              <img src={player.imageUrl} alt={`Image of ${player.name}`} />
              <h4>{player.name}</h4>
              <p>{player.breed}</p>
              <button type='button' onClick={() => navigate(`/players/${player.id}`)}>
                See Player Details
              </button>
              <button type='button' onClick={() => handleDelete(player.id)}>
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

// function AllPlayers({ searchQuery }) {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     // Used to gather the players data from your API or data source
//   }, []);

//   const filteredPlayers = players.filter((player) =>
//     player.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       {filteredPlayers.map((player) => (
//         <div key={player.id}>{player.name}</div>
//       ))}
//     </div>
//   );
// }

export default AllPlayers;
