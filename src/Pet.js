import React from "react";
import { Link } from "@reach/router";
export default function Pet({ name, animal, breed, media, location, id }) {
  const x = name.toUpperCase(); //in {}, expression is allowed, statement not.
  //in this case this whole x = name... is a statement while name.toUpperCase() is expression.
  //ternary operators are expression so allowed
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
}
