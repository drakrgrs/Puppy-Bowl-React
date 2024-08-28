const COHORT = "2407-FTB-ET-WEB-FT";
const APIurl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${APIurl}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPlayer(id) {
  try {
    const response = await fetch(`${APIurl}/players/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlayer(name, breed, imageUrl) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          breed,
          imageUrl,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function deletePlayer(id) {
  try {
    const response = await fetch(`${APIurl}/players/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
