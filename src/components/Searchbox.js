import React from 'react'

const Searchbox = ({searchChange}) => {
  return (
    <div className="" style={{ padding: "10px" }}>
      <input
        style={{ padding: "10px" }}
        className="bg-dark text-white"
        type="text"
        placeholder="Search Products"
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox
