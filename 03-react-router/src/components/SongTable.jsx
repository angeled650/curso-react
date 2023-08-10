import SongTableRow from "./SongTableRow";

const SongTable = ({ handleDeleteSong, mySongs }) => {
  // console.log(mySongs);
  return (
    <div>
      <h3>Mis Canciones Favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Artista</th>
            <th>Canción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                handleDeleteSong={handleDeleteSong}
                key={index}
                el={el}
                id={index}
              />
            ))
          ) : (
            <tr colSpan={4}>
              <td>No hay canciones guardadas como favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
