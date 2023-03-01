import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addLocations } from "../../store/reducers/location";
import "./Locations.css";

const Locations = () => {
  const { locationList } = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((data) => {
        dispatch(addLocations(data.results));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const renderLocations = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (locationList.length === 0) {
      return <p>No locations found.</p>;
    }

    return locationList.map((location) => (
      <Link key={location.id} to={`/?location=${location.id}`}>
        <div className="location-card">
          <h2>{location.name}</h2>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
          <p>Number of Residents: {location.residents.length}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div>
      <h1>Locations</h1>
      <div className="locations-grid">{renderLocations()}</div>
    </div>
  );
};

export default Locations;
