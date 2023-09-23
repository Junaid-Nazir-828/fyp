import React, { useState } from "react";
import './labs.css'
import PCs from "../pcs/PCs";
import {
  blockA,
  blockB,
  blockC,
  blockIAA,
  blockLTC,
  blockFMC,
} from "../../Data";

const Labs = ({ buildingName }) => {
  const [selectedLab, setSelectedLab] = useState(null);

  const handleBackToLabs = () => {
    setSelectedLab(null); // Set selectedLab to null to go back to labs
  };

  let labsData;

  // Determine which labs data to use based on the building name
  switch (buildingName) {
    case "Block A":
      labsData = blockA;
      break;
    case "Block B":
      labsData = blockB;
      break;
    case "Block C":
      labsData = blockC;
      break;
    case "BlockIAA":
      labsData = blockIAA;
      break;
    case "BlockLTC":
      labsData = blockLTC;
      break;
    case "BlockFMC":
      labsData = blockFMC;
      break;
    default:
      labsData = [];
  }

  return (
    <div>
      {selectedLab ? (
        // Display PCs when a lab is selected and pass the onBackToLabs function
        <PCs labName={selectedLab} onBackToLabs={handleBackToLabs} />
      ) : (
        // Display labs when no lab is selected
        labsData.map((lab) => (
          <div
            key={lab.id}
            className="card"
            onClick={() => setSelectedLab(lab.name)} // Set the selected lab when clicked
          >
            <img src={lab.image} alt={`Lab ${lab.name}`} />
            <p>{lab.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Labs;
