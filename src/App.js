// commons imports
import { useState, useEffect } from 'react';
import axios from 'axios';

// import css
import './App.css';

//import components
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Navbar from './components/NavBar/NavBar';
import {Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from './components/Error404';
import PathRoutes from './components/helpers/Routes.helper'; 
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
   

   const email = 'ejemplo@gmail.com';
   const password = 'password12';


function App() {
   const [characters, setCharacters] = useState({});
   const {pathname} = useLocation() 
   const navigate = useNavigate();
   const [isLoggedIn, setIsLoggedIn] = useState(false);


   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        navigate('/');
      }
    }, [navigate]);
   

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            // Check if the character already exists in the state
            if (!characters[id]) {
               setCharacters((oldChars) => ({ ...oldChars, [id]: data }));
            } else {
               window.alert('¡Este personaje ya está en la lista!');
            }
         }
      });
   };

   const generateRandomId = () => {
      let id = 0;
      do {
         id = Math.floor(Math.random() * 1087) + 1;
      } while (characters[id]);
      return id;
   };

   const onClickRandom = () => {
      const id = generateRandomId();
      onSearch(id);
      // Update characters state after calling onSearch()
      setCharacters((oldChars) => ({ ...oldChars, [id]: null }));
   };

   const onClose = (id) => {
      const newChars = { ...characters };
      delete newChars[id];
      setCharacters(newChars);
   };

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         const searchInput = document.getElementById('search-input');
         onSearch(searchInput.value);
         searchInput.value = '';
      }
};

const login = (userData) => {
   if (userData.password === password && userData.email === email) {
     localStorage.setItem('token', 'example_token');
     setIsLoggedIn(true);
     navigate('/home');
   }
 };

 const logout = () => {
   localStorage.removeItem('token');
   setIsLoggedIn(false);
   navigate('/');
 };

   return (
      <div className='App'>
         {
            pathname !== '/' &&  <Navbar onSearch={onSearch} onClickRandom={onClickRandom} handleKeyPress={handleKeyPress} />

         }


        <Routes>
          <Route path= {'/'} element={<Form login={login} />}/>
          <Route path= {PathRoutes.HOME} element={<Cards characters={Object.values(characters)} onClose={onClose} />} />
          <Route path= {PathRoutes.ABOUT} element={<About />} />
          <Route path= {PathRoutes.DEATIL} element={<Deatil />} />
          <Route path= {PathRoutes.FAVORITES} element={<Favorites />} />
          <Route path="*" element={Error404} />
        </Routes>
        {isLoggedIn && <button onClick={logout}>Cerrar sesión</button>}

      </div>
   );
} 

export default App;