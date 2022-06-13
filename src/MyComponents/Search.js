import React, { useState } from "react";
import { SeriesSearch } from "../MyComponents/SeriesSearch";
import { Card, Col, Container, Row } from "react-bootstrap";

export const Search = (props) => {
  const [searchBox, setSearchBox] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(searchBox);
    if (!searchBox) {
      alert("SearchBox cannot be blank");
    } else {
      setSearchBox("");
      <SeriesSearch search={searchBox} />;
    }
  };
  return (
    <div className="container my-3">
      <h3>Enter Series to Search</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            Search series
          </label>
          <input
            type="text"
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
            className="form-control"
            id="search"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Search
        </button>
      </form>
    </div>
  );
};
