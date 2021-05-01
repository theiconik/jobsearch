import React from "react";

export default function SearchForm({ params, onParamChange }) {
  return (
    <div class="row ignore-screen level u-center">
      <div class="col-7 ignore-screen level-item" style={{marginBottom:"1.5rem"}}>
        <input
          type="search"
          placeholder="Search by Title"
          onChange={onParamChange}
          value={params.description}
          name="description"
        />
      </div>
      <div class="col-7 ignore-screen level-item">
        <input
          type="search"
          placeholder="Search by Location 🗺"
          onChange={onParamChange}
          value={params.location}
          name="location"
        />
      </div>
    </div>
  );
}
