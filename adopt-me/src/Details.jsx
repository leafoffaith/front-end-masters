import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Carousel from "./Carousel";
import fetchPet from "./fetchPets";

const Details = () => {
  const { id } = useParams();
  //checks if you have details[id] in cache if not it will fetch it
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

function getDetails() {}

export default Details;
