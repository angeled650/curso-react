import { useNavigate } from "react-router-dom";

const SongTableRow = ({ handleDeleteSong, el, id }) => {
  const { bio, search, title } = el;
  const navigate = useNavigate();
  console.log(el);

  return (
    <tr>
      <td>
        <img src="https://picsum.photos/40" alt={bio.name} />
      </td>
      <td>{bio.name}</td>
      <td>{title}</td>
      <td>
        <button onClick={() => navigate(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
