import { deletePlayer } from "../API";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ id, isHome }) => {
  const navigate = useNavigate();

  const handleClick = async (e, id) => {
   await deletePlayer(id);
    isHome ? window.location.reload() : navigate("/");
  };

  return (
    <button
      onClick={(e) => {
        handleClick(e, id);
      }}
    >
      Delete Player
    </button>
  );
};

export default DeleteButton;
