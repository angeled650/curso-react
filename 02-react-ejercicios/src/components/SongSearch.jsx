import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

function SongSearch() {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistData = {};
      let lyricsData = {};

      const artistToken = "boatiPpnKpAFliBLXivcJYEcMaMkljxaQZhFEldg";
      const songToken = "6a439a668faf3fa97852d9518dcb7a83";

      const songURL = `http://api.musixmatch.com/ws/1.1/track.search?apikey=${songToken}&q_artist=${artist}&q_track=${song}`;

      const artistURL = `https://api.discogs.com/database/search?type=artist&q=${artist}&token=${artistToken}`;

      setLoading(true);
      try {
        const [artistRes, songRes] = await Promise.all([
          helpHttp().get(artistURL),
          helpHttp().get(songURL),
        ]);
        // console.log(artistRes);
        // console.log(songRes);

        // console.log("Segunda Fase");

        if (artistRes && artistRes.results && artistRes.results.length != 0) {
          const artistSearchURL = artistRes.results[0].resource_url;
          artistData = await helpHttp().get(artistSearchURL);
        } else {
          console.log("artista no encontrado");
          artistData = { error: true, errorMsg: "Artista no encontrado" };
        }

        if (
          songRes &&
          songRes.message.body &&
          songRes.message.body.track_list.length != 0
        ) {
          const lyricId = songRes.message.body.track_list[0].track.track_id;
          setTitle(songRes.message.body.track_list[0].track.track_name);

          // console.log(lyricId);
          // console.log("Tercera Fase");
          const lyricSearchURL = `http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${songToken}&track_id=${lyricId}`;
          const lyricSearch = await helpHttp().get(lyricSearchURL);
          // console.log(lyricSearch);
          if (lyricSearch.message.body.length != 0) {
            lyricsData = lyricSearch.message.body.lyrics;
          } else {
            console.log("Letra de la canción no encontrada");
            lyricsData = {
              error: true,
              errorMsg: "Letra de la canción no encontrada",
            };
          }
        } else {
          console.log("canción no encontrada");
          lyricsData = { error: true, errorMsg: "Canción no encontrada" };
        }
      } catch (error) {
        console.log("Error al obtener los datos", error);
      }

      // console.log(artistData);
      // console.log(lyricsData);
      setBio(artistData);
      setLyrics(lyricsData);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };
  return (
    <div>
      <h2>Buscador de Canciones</h2>
      <article className="grid-1-3">
        {loading && <Loader />}
        <SongForm handleSearch={handleSearch} />
        {search && !loading && (
          <SongDetails
            search={search}
            bio={bio}
            lyrics={lyrics}
            title={title}
          />
        )}
      </article>
    </div>
  );
}

export default SongSearch;
