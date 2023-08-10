import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";

const SongPage = ({ mySongs }) => {
  let { id } = useParams();
  let currentSong = mySongs[id];
  let { search, lyrics, bio, title } = currentSong;

  return (
    <div className="grid-1-2">
      <SongDetails search={search} bio={bio} lyrics={lyrics} title={title} />
    </div>
  );
};

export default SongPage;
