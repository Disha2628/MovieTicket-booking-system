import React from 'react';

const Sidebar = () => {
  return (
    <aside className="filter-bar">
      <div className="filter-item">
        <h3>Genre</h3>
        <select>
          <option>All</option>
          <option>Action</option>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Horror</option>
          <option>Romance</option>
        </select>
      </div>

      <div className="filter-item">
        <h3>Language</h3>
        <select>
          <option>All</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      <div className="filter-item">
        <h3>Date</h3>
        <input type="date" />
      </div>
    </aside>
  );
};

export default Sidebar;