import React from "react";

const FilterTask = ({ handelfilter }) => {
  return (
    <div>
      <button onClick={() => handelfilter("done")}>Done</button>
      <button onClick={() => handelfilter("notdone")}>NotDone</button>
      <button onClick={() => handelfilter("All")}>All</button>
    </div>
  );
};

export default FilterTask;
