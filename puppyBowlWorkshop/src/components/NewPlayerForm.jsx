import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlayer } from '../API/index.js';

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [breed, setBreed] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlayer = { 
      name, 
      breed,
      imageUrl, 
    };

    try {
      const response = await createPlayer(newPlayer);
      const createdPlayer = response?.data?.newPlayer;

      if (!createdPlayer || !createdPlayer.id) {
        console.error("Invalid player object returned from API", response?.data);
        alert("Failed to create player. Please check the console.");
        return;
      }

      alert(`Player "${createdPlayer.name}" added successfully!`);
      navigate(`/players/${createdPlayer.id}`);
    } catch (error) {
        console.error("Error adding player:", error);
        alert("Failed to add player. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Add New Player</h2>
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
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
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
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;