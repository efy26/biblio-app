'use client';
import { useState } from "react";
import styles from "./Documents.module.css";
import Gallerie from "./Gallerie";
import GalleriePokemon from "@/public/gallerie-pokemon.json"
export default function Livres() {
  const [livres, setLivres] = useState([]);
  const [newLivre, setNewLivre] = useState("");

  function addLivre() {
    if (newLivre !== "") {
      setLivres([...livres, newLivre]);
      setNewLivre("");
    }
  }
  return (
    <>
      <div className={styles.container}>
        <h1>Gestion des livres</h1>
        <div>
          <input
            placeholder="Entrez un nouveau Livre"
            value={newLivre}
            onChange={(e) => {
              setNewLivre(e.target.value);
            }}
          />
          <button onClick={addLivre}>Ajouter</button>
        </div>
        <h2>Liste des livres</h2>
        <ul>
          {livres.map((livre, index) => (
            <li key={index}>{livre}</li>
          ))}
        </ul>
        <Gallerie images={GalleriePokemon}/>
      </div>
    </>
  );
}
