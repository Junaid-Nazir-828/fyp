import React from "react";
import "./pcs.css";
import {
  systemsLab01,
  systemsLab02,
  systemsLab03,
  systemsLab04,
  systemsLab05,
  systemsLab06,
} from "../../Data";

const PCs = ({ labName,  onBackToLabs }) => {
  let pcsData;

  // Determine which PCs data to use based on the lab name
  switch (labName) {
    case "Lab 01":
      pcsData = systemsLab01;
      break;
    case "Lab 02":
      pcsData = systemsLab02;
      break;
    case "Lab 03":
      pcsData = systemsLab03;
      break;
    case "Lab 04":
      pcsData = systemsLab04;
      break;
    case "Lab 05":
      pcsData = systemsLab05;
      break;
    case "Lab 06":
      pcsData = systemsLab06;
      break;
      case "Lab 101":
      pcsData = systemsLab01;
      break;
    case "Lab 102":
      pcsData = systemsLab02;
      break;
    case "Lab 103":
      pcsData = systemsLab03;
      break;
    case "Lab 104":
      pcsData = systemsLab04;
      break;
    case "Lab 105":
      pcsData = systemsLab05;
      break;
    case "Lab 106":
      pcsData = systemsLab06;
      break;
    default:
      pcsData = [];
  }

  return (
    <div className="pc-list">
    <button className="titles" onClick={onBackToLabs}>Back to Labs</button>
      <table>
        <thead>
          <tr>
            <th>PC Name</th>
            <th>Row : Column</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {pcsData
            .sort((a, b) => a.id - b.id) // Sort PCs in ascending order by ID
            .map((pc, index) => (
              <tr key={pc.id} className="card">
                <td>{pc.name}</td>
                <td>{`${Math.floor(index / 2) + 1}:${(index % 2) + 1}`}</td>
                <td>
                   <label class="switch">
                     <input type="checkbox" />
                     <span class="slider"></span>
                   </label>
              </td>{" "}
                
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PCs;

// const PCs = ({ labName }) => {
//   let pcsData;

//   // Determine which PCs data to use based on the lab name
//   switch (labName) {
//     case "Lab 01":
//       pcsData = systemsLab01;
//       break;
//     case "Lab 02":
//       pcsData = systemsLab02;
//       break;
//     case "Lab 03":
//       pcsData = systemsLab03;
//       break;
//     case "Lab 04":
//       pcsData = systemsLab04;
//       break;
//     case "Lab 05":
//       pcsData = systemsLab05;
//       break;
//     case "Lab 06":
//       pcsData = systemsLab06;
//       break;
//     default:
//       pcsData = [];
//   }

//   return (
//     <div className="pc-list">
//       <table>
//         <thead>
//           <tr>
//             <th className="table-head">PC Name</th>
//             <th>Row : Column</th>
//             <th className="table-head">Current Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pcsData
//             .sort((a, b) => a.id - b.id) // Sort PCs in ascending order by ID
//             .map((pc, index) => (
//               <tr key={pc.id} className="card">
//                 <td className="pc-name">{pc.name}</td>
//                 <td>{`${Math.floor(index / 2) + 1}:${(index % 2) + 1}`}</td>
//                 <td>
//                   <label class="switch">
//                     <input type="checkbox" />
//                     <span class="slider"></span>
//                   </label>
//                 </td>{" "}
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PCs;
