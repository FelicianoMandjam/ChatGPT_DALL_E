import React from "react";
import { Link } from "react-router-dom";

/* 
Créez un composant Chat en React où l'utilisateur peut poser des questions et recevoir des réponses générées par une API d'IA. Le composant doit inclure une zone de saisie où l'utilisateur peut taper sa question, ainsi qu'une zone de conversation pour afficher les échanges entre l'utilisateur et l'IA.
*/

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <Link to="/chat">
        {" "}
        <button type="button" href="/chat">
          {" "}
          ChatBox
        </button>{" "}
      </Link>
      <Link to="/gen_images">
        <button type="button" href="/gen_images">
          DELL 2
        </button>
      </Link>
    </div>
  );
};

export default Home;
