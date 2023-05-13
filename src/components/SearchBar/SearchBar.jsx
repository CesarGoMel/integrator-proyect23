import { useState } from "react";
import styles from "./SearchBar.module.css";
import { NavLink } from "react-router-dom";
import Logotipo from "../../images/log2.png";


function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(id);
      setId("");
    }
  };

  return (
    <div className={styles.navbar}>
      <div><img className={styles.logo}src={Logotipo} alt="" /></div>
      <div className={styles.btn}>
        <NavLink to="/home">
        <button>Home</button>
      </NavLink><NavLink to="/About">
        <button>About</button>
      </NavLink> 
    
      <NavLink to="/Favorites">
        <button>Fav</button>
      </NavLink>
      </div>

      <div className={styles.wrapperSearch}>
        <input
          className={styles.input}
          type="search" placeholder = 'Cards Search '
          onChange={handleChange}
          value={id}
          onKeyDown={handleKeyPress}
        /> 
      </div>
      
    </div>
  );
}

export default SearchBar;
