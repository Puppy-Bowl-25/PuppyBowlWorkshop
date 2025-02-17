const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WED-AM/players";

// fetch all players from API
export async function fetchAllPlayers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch players");
    }
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error("Failed to fetch players:", error);
    return null;
  }
}

// fetch single player from API
export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/${playerId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch player with ID: ${playerId}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error fetching player ${playerId}:`, error);
  }
}

// add new player to API
export async function createPlayer(playerData) {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playerData.name,
        breed: playerData.breed,
        imageUrl: playerData.imageUrl,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to add player: ${errorText}`);
    }

    const data = await response.json();
    console.log("Parsed API response:", data);

    return data;
  } catch (error) {
    console.error("Failed to add player:", error);
    return null;
  }
}


// delete player from API
export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/${playerId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Player could not be deleted.");
    }
    return true;
  } catch (error) {
    console.error("Failed to delete player:", error);
    return false;
  }
}

