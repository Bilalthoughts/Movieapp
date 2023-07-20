import React, { useState } from "react";

const Search = ({ find, setFind,setFinalpoint }) => {
  

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalpoint(find);
  }

  return (
    <>
      <h2 className="text-sm">Search any movies</h2>
      <form onSubmit={submitHandler}>
        <input type="text" value={find} onChange={(e)=>setFind(e.target.value)} className="rounded p-1 my-1 text-black" placeholder="Search..." />
        <button className="text-sm px-4 py-1 font-bold mx-1 rounded text-yellow-300 shadow-xl bg-black" type="submit">search</button>
      </form>
    </>
  )
}

export default Search;
