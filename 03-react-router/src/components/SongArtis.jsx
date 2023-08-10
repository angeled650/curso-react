import React from "react";

function SongArtist({ bio }) {
  return (
    <section>
      <h3>{bio.name}</h3>
      <img src={bio.images && bio.images[0].resource_url} alt={bio.name} />
      <p style={{ whiteSpace: "pre-wrap" }}>{bio.profile}</p>
      <a href={bio.urls && bio.urls[0]} target="_blank" rel="noopener">
        Sitio Web
      </a>
    </section>
  );
}

export default SongArtist;
