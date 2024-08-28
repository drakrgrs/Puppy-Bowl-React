import { useNavigate } from "react-router-dom";


const SeeDetailsButton = ({ player, setSelectedPlayer }) => {
  const navigate = useNavigate();

  const detailsClick = async () => {
    setSelectedPlayer(player);
    navigate(`/players/${player.id}`);
  };

  return (
    <button
      onClick={detailsClick}
    >
      See Details
    </button>
  );
};

export default SeeDetailsButton;
