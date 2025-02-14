import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllPlayers } from "../API";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const playersData = await fetchAllPlayers();
      setPlayers(playersData);
    };

    getPlayers();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      {players.length > 0 ? (
        players.map((player) => (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <p>{player.team}</p>
          </div>
        ))
      ) : (
        <p>Loading players...</p>
      )}
    </div>
  );
};

export default AllPlayers;
