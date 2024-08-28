import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";
import DeleteButton from "./DeleteButton";
import SeeDetailsButton from "./SeeDetailsButton";

const AllPlayers = ({ setSelectedPlayer }) => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPlayers() {
      const APIresponse = await fetchAllPlayers();
      if (APIresponse.success) {
        setPlayers(APIresponse.data.players);
      } else {
        setError(APIresponse.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParams
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParams)
      )
    : players;

  return (
    <>
      <div className="wholePage">
        <div className="newPlayerForm">
          <NewPlayerForm players={players} setPlayers={setPlayers} />
        </div>
        <div id="search">
        <label>
          Search:{" "}
          <input
            id="searchBar"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
          />
        </label>
        </div>
      </div>
      <div className="roster">
        {playersToDisplay.map((player) => {
          return (
            <div className="playerCard" key={player.id}>
              <div className="pcTitle"
                onClick={() => {
                  setSelectedPlayer(player);
                  navigate(`/players/${player.id}`);
                }}
              >
                {player.name} <br />
                {player.breed} <br />
                {player.status} <br />
              </div>
              <img src={`${player.imageUrl}`} alt="player image" /><br />
              <DeleteButton id={player.id} isHome={true} />
              <SeeDetailsButton
                player={player}
                setSelectedPlayer={setSelectedPlayer}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllPlayers;
