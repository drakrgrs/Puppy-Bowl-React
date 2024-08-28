import { useEffect } from "react";
import { fetchPlayer } from "../API";
import { useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import HomeButton from "./HomeButton";

const SinglePlayer = ({ selectedPlayer, setSelectedPlayer }) => {
  let { id } = useParams();

  useEffect(() => {
    async function getPlayer() {
      const APIresponse = await fetchPlayer(id);

      if (APIresponse.success) {
        setSelectedPlayer(APIresponse.data.player);
      } else {
        setError(APIresponse.error.message);
      }
    }
    getPlayer();
  }, []);

  return (
    <div className="selectedPlayerCard">
      {selectedPlayer && (
        <>
          <h1>
            {selectedPlayer.name} {selectedPlayer.breed} {selectedPlayer.status}
          </h1>
          <img src={`${selectedPlayer.imageUrl}`} alt="player image" />{" "}
          <DeleteButton id={id} isHome={false} />
          <HomeButton />
        </>
      )}
    </div>
  );
};

export default SinglePlayer;
