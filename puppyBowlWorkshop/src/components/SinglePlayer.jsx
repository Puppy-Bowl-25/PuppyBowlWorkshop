import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API/index.js";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check to make sure valid ID was retrieved before running function
    if (!id) return;

    const getPlayer = async () => {
      try {
        const playerData = await fetchSinglePlayer(id);
        console.log("Fetched player:", playerData);
        // setPlayer(playerData);
        setPlayer(playerData.data.player);
      } catch (error) {
        console.error("Failed to fetch player:", error);
      }
    };
    getPlayer();
  }, [id]);
  return (
    <div>
      <h1>Single Player</h1>
      <div className='player-container'>
        {player ? (
          <div key={player.id} className='player-card'>
            <img src={player.imageUrl} alt={`Image of ${player.name}`} />
            <h4>{player.name}</h4>
            <p>{player.breed}</p>
            <button type='button' onClick={() => navigate("/")}>
              Back to All Players
            </button>
          </div>
        ) : (
          <p>Loading player...</p>
        )}
      </div>
    </div>
  );
}
