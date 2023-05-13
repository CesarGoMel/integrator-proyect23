import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import styles from "./Card.module.css";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    image,
    onClose = (id) => {
      props.removeFavCard(id);
    },
    addFavCard,
    removeFavCard,
    myFavoriteCard,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (myFavoriteCard && myFavoriteCard.length > 0) {
      setIsFav(myFavoriteCard.some((fav) => fav.id === id));
    }
  }, [myFavoriteCard, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavCard(id);
    } else {
      setIsFav(true);
      addFavCard(props);
    }
  };



  return (
    <div className={styles.wrapperCard}>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button className={styles.btn} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <img className={styles.img} src={image} alt="character" />
      <Link to={`../../deatil/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <div className={styles.txt}>
        <p>
          {status} | {gender} | {species}
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavoriteCard: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavCard: (char) => dispatch(addFav(char)),
    removeFavCard: (id) => dispatch(removeFav(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);
