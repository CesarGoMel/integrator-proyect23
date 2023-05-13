import React from 'react';
import styles from '../About/About.module.css';
//import profilePic from '../fondo.jpg'; // importa la imagen de tu perfil

const About = () => {
  return (
    <div className={styles.mee}>
      {/* <img src={profilePic} alt="Profile picture" /> */}
      <h1>Mi nombre es [Sexy]</h1>
      <p>Soy un desarrollador de software apasionado y siempre estoy buscando nuevas formas de aprender y mejorar mis habilidades.</p>
      <p>Me encanta trabajar con tecnologías como React, Node.js y MongoDB.</p>
      <p>En mi tiempo libre, disfruto de la lectura y la práctica de deportes al aire libre como el senderismo y el ciclismo.</p>
      <p>No dudes en contactarme si tienes alguna pregunta o si te gustaría trabajar conmigo en algún proyecto emocionante.</p>
    </div>
  );
}

export default About;
