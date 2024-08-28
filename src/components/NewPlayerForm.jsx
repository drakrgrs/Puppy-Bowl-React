import { useState } from "react";
import { createPlayer } from "../API";

const NewPlayerForm = ({ players, setPlayers }) => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newBreed, setNewBreed] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  console.log(newPlayerName, newBreed, newImageUrl);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await createPlayer(newPlayerName, newBreed, newImageUrl);
      const newPlayerList = [...players, response.data.newPlayer];
      setPlayers(newPlayerList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form id="submitForm" onSubmit={handleSubmit}>
        <h3>Add a New Player:</h3>
        <div>
          <label className="inputLabel">
            Player Name:
            <input
              className="inputForm"
              type="text"
              value={newPlayerName}
              required
              onChange={(e) => setNewPlayerName(e.target.value)}
            />
          </label>
          <label className="inputLabel">
            Breed:
            <input
              className="inputForm"
              type="text"
              value={newBreed}
              required
              onChange={(e) => setNewBreed(e.target.value)}
            />
          </label>
          <label className="inputLabel">
            Image URL:
            <input
              className="inputForm"
              type="link"
              value={newImageUrl}
              required
              onChange={(e) => setNewImageUrl(e.target.value)}
            />
          </label>
          <button className="submitButton" type="submit" value="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPlayerForm;
