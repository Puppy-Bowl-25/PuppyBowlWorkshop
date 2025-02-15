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
};

