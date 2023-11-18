import React from "react";
import { useFavourites } from "../services/FavouritesContext";
import { List } from "../services/MovieService";
import ListHeading from "../components/ListHeading";

const FavouritesPage = () => {
  const { favourites, removeFavourite } = useFavourites();

  return (
    <div>
      {favourites?.length > 0 ? (
        <ListHeading heading="Favourites" />
      ) : (
        <ListHeading heading="No Favourites yet.." />
      )}

      <List
        movies={favourites}
        handleOnClick={removeFavourite}
        isFavourite={true}
      />
    </div>
  );
};

export default FavouritesPage;
