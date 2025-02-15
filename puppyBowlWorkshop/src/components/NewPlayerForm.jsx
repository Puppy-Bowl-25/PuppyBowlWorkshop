import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlayer } from '../API/index.js';


const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlayer = { 
      name, 
      imageUrl, 
      breed, 
    };
    console.log("New player:", JSON.stringify(newPlayer, null, 2));

    try {
      const createdPlayer = await createPlayer(newPlayer);
      console.log("Created player:", createdPlayer);
      if (createdPlayer) {
        alert("Player created successfully!");
        navigate("/");
      } else {
        setError("Failed to create player. Please try again.");
      }
    } catch (error) {
      console.error("Error creating player:", error);
      setError("Failed to create player. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Add New Player</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </label>

        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;