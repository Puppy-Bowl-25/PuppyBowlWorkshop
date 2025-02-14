const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WED-AM/players";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch players:", error);
  }
}
