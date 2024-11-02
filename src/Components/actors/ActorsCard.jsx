//import React from 'react'
import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>
        {name} {!!gender && `(${gender})`}{' '}
      </h1>

      <p>{country ? `Comes from ${country}`: `No country Known`}</p>
      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday? `Died {deathday}`: `  Dont know when died `}</p>
      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </SearchCard>
  );
};

export default ActorsCard;
