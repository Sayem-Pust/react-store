import React from 'react'

const Searchbox = ({searchChange}) => {
  return (
    <div className="">
      <input
        className=""
        type="text"
        placeholder="Search Products"
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox
