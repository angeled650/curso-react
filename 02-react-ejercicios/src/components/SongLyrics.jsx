import React from "react";

function SongLyrics({ title, lyrics }) {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>
        {lyrics.lyrics_body}
      </blockquote>
    </section>
  );
}

export default SongLyrics;
