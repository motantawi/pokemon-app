import React from "react";

export const Pagination = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div>
      {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  );
};
