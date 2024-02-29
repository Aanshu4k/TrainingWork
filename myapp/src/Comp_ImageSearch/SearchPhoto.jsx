import React, { useState } from "react";
import "./SearchPhoto.css";

const SearchPhoto = () => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "J8-5ZQiMU7xsi83-6dO7cERxN6AWv1snN2hvzlF6PXo";

  const searchP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&per_page=12`
      );
      const data = await res.json();
      if (data.results.length === 0) {
        setError("No images found.");
      } else {
        setPics(data.results);
        setError(null);
      }
    } catch (error) {
      setError("Error searching for photos. Please try again.");
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={searchP} className="form">
        <label htmlFor="query" className="label">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={'Try "landscape" or "Tokyo"'}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <a href={pic.urls.full} target="_blank" rel="noopener noreferrer">
              <img
                src={pic.urls.small}
                alt={pic.alt_description}
                className="card-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPhoto;
