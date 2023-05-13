import { connect, useDispatch } from "react-redux";
import { OrderCards, filterCards, removeFav } from "../../redux/actions/actions";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css"
import { useState } from "react";

const Favorites = (props) => {
  const { myFavorites, removeFavCard } = props;
  const [aux, setAux] = useState(false);

  const onClose = (id) => {
    removeFavCard(id);
  };

  
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    dispatch(OrderCards(e.target.value))
    setAux(!aux); 

  }
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));

  }


  return (
    <div className={styles.mainDiv}>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Desendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unKnown">UnKnown</option>
        
        </select>
        
      </div>

      {myFavorites?.map(({ id, name, status, species, gender, origin, image }) => (
        <Card
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin && origin.name}
          image={image}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
  };

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavCard: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
