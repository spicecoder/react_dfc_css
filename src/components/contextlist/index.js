import React, { useState } from "react";
import Domain from "./Domain";
import Flow from "./Flow";
import data from "../../data.json";
import Entities from "./Entities";
import "../../App.css";
import Button from "@mui/material/Button";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";

const Contextlist = () => {
  const [view, setView] = useState("grid");
  const arr = data.dfc_unit;
  return (
    <div>
      <div className="view" spacing={2}>
        <Button
          variant="outlined"
          onClick={() => setView("grid")}
          startIcon={<GridViewIcon />}
        >
          Grid
        </Button>
        <Button
          variant="contained"
          onClick={() => setView("list")}
          startIcon={<ViewListIcon />}
        >
          List
        </Button>
      </div>
      <div className={view === "list" ? "main-list-container" : ""}>
        {arr.map((dfc, i) => (
          <div
            className={
              view === "grid"
                ? "grid-context-container"
                : "list-context-container"
            }
            style={{ marginTop: "30px", marginBottom: "30px" }}
            key={i}
          >
            <Domain domain={dfc.d} view={view} />
            <Flow flow={dfc.f} view={view} />
            <Entities entities={dfc.c} view={view} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contextlist;

// import React, { useState } from "react";
// import Domain from "./Domain";
// import Flow from "./Flow";
// import data from "../../data.json";
// import Entities from "./Entities";
// import "../../App.css";
// import Button from "@mui/material/Button";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import GridViewIcon from "@mui/icons-material/GridView";

// const Contextlist = () => {
//   const [view, setView] = useState("grid");
//   const arr = data.dfc_unit;
//   return (
//     <div>
//       <div className="view" spacing={2} style={{ marginTop: "50px" }}>
//         <Button
//           variant="outlined"
//           onClick={() => setView("grid")}
//           startIcon={<GridViewIcon />}
//         >
//           Grid
//         </Button>
//         <Button
//           variant="contained"
//           onClick={() => setView("list")}
//           startIcon={<ViewListIcon />}
//         >
//           List
//         </Button>
//       </div>
//       {arr.map((dfc, i) => (
//         <div className="Context" key={i}>
//           <Domain domain={dfc.d} />
//           <Flow flow={dfc.f} />
//           <Entities entities={dfc.c} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Contextlist;
