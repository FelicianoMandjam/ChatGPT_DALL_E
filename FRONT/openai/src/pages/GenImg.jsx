import React, { useEffect, useState } from "react";
import axios from "axios";

const GenImg = () => {
  const [prompt, setPrompt] = useState("");

  const handleChange = (event) => {
    console.log("Entrée dans handleChange");
    setPrompt(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8000/api/genImg", {
      prompt: prompt,
    });
    console.log(data);
    setPrompt(data);
  };

  return (
    <div>
      <h1>Bienvenue au génerateur d'image</h1>

      <div className="prompt">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Génerer</button>
        </form>
        <div className="container">
          <img src={prompt} />
        </div>
      </div>
    </div>
  );
};

export default GenImg;
