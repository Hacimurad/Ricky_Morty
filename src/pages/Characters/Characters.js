import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useSelector, useDispatch } from "react-redux";
import {
  addCharacters,
  deleteCharacters,
} from "../../store/reducers/character";

import "./main.css";

const Characters = () => {
  const { characterList } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const locationId = searchParams.get("location");

  console.log(characterList);

  const filterByLocation = (characters, locationId) => {
    return characters.filter((character) => {
      return (
        character.location.url ===
        `https://rickandmortyapi.com/api/location/${locationId}`
      );
    });
  };

  const handleFilter = (event, filterType) => {
    setFilter({ ...filter, [filterType]: event.target.value });
    setPage(1);
    dispatch(deleteCharacters());
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${filter.name}&status=${filter.status}&species=${filter.species}&gender=${filter.gender}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (locationId) {
          dispatch(addCharacters(filterByLocation(data.results, locationId)));
        } else {
          dispatch(addCharacters([...data.results]));
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        dispatch(deleteCharacters());
      });
  }, [page, filter, location]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleFilterChange = (event) => {
    setFilter({ ...filter, name: event.target.value });
    setPage(1);
    dispatch(deleteCharacters());
  };

  const renderCharacters = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (characterList.length === 0) {
      return <p>No characters found.</p>;
    }

    return characterList.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ));
  };

  return (
    <div>
      <h1>Characters</h1>
      {/* Filter options */}
      <div className="filterSide">
        <div>
          <label>Status</label>
          <select
            onChange={(e) => {
              handleFilter(e, "status");
            }}
          >
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div>
          <label>Gender</label>
          <select
            onChange={(e) => {
              handleFilter(e, "gender");
            }}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div>
          <label>Species</label>
          <select
            onChange={(e) => {
              handleFilter(e, "species");
            }}
          >
            <option value="">All</option>
            <option value="alien">Alien</option>
            <option value="human">Human</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className="searchSide">
        <label htmlFor="filter">Search by name:</label>
        <input
          type="text"
          id="filter"
          value={filter.name}
          onChange={handleFilterChange}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {renderCharacters()}
      </div>
      {characterList.length > 0 && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Characters;
