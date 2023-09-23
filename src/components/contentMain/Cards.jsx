import React from 'react'


const Cards = ({ name, image, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(name)}>
      <img src={image} alt={`Building ${name}`} />
      <h3>{name}</h3>
    </div>
  );
};

export default Cards
