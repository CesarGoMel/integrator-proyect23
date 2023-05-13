import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../Deatil/Deatil.module.css";

const Deatil = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.back}>
       
      <div className={styles.contenedor}>
        
        <div className={styles.info}>
          {character.name && (
            <h2 className={styles.name}>{character.name}</h2>
          )}
          {character.status && <h3>Estado: {character.status}</h3>}
          {character.species && <h3>Especie: {character.species}</h3>}
          {character.gender && <h3>Género: {character.gender}</h3>}
          {character.origin && character.origin.name && (
            <h3>Origen: {character.origin.name}</h3>
          )}
        </div>
        
        <div >
        <img className={styles.img} src={character.image} alt={`Imagen del personaje con id ${id}`}/>
        </div>
      
      </div>
    </div>
  );
};

export default Deatil;
