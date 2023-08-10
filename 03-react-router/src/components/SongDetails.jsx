import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtis";
import SongLyrics from "./SongLyrics";

function SongDetails({ search, bio, lyrics, title }) {
  if (!bio || !lyrics) return null;

  return (
    <>
      <div>
        {!lyrics.error ? (
          <SongLyrics title={title} lyrics={lyrics} />
        ) : (
          <Message
            msg={`${lyrics.errorMsg}: "<em>${search.song}</em>"`}
            bgColor="#dc3545"
          />
        )}
      </div>
      <div>
        {!bio.error ? (
          <SongArtist bio={bio} />
        ) : (
          <Message
            msg={`${bio.errorMsg}: "<em>${search.artist}</em>"`}
            bgColor="#dc3545"
          />
        )}
      </div>
    </>
  );
}

export default SongDetails;
