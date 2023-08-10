import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};
function SongForm({ handleSearch }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del artista"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default SongForm;
