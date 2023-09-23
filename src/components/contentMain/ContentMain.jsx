import React, { useState } from 'react'
import { blocks } from '../../Data'
import Labs from '../labs/Labs'
import Cards from './Cards'
import './contentMain.css'

const ContentMain = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const handleBlockClick = (buildingName) => {
    setSelectedBuilding(buildingName);
  };

  const handleBackToBlocks = () => {
    setSelectedBuilding(null);
  };

  return (
    <div className="main-container">
    <button className='back-button' onClick={handleBackToBlocks}>Back to Blocks</button>
    {selectedBuilding ? (
        <h3 className='titles'>Blocks -- {selectedBuilding}</h3>
      ) : (
        <h3 className='titles'>Blocks</h3>
      )}
    <section className='blocks_section'>
      {selectedBuilding ? (
        <Labs buildingName={selectedBuilding} />
      ) : (
        blocks.map((building) => (
          <Cards
            key={building.id}
            name={building.name}
            image={building.image}
            onClick={() => handleBlockClick(building.name)}
          />
        ))
      )}
    </section>
  </div>
  
  );
};

export default ContentMain
