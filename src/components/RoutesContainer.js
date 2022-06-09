import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./Search";
import Error from "./Error";
import Results from "./Results";

const RoutesContainer = () => {
  return (
    <div className="main px-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        {["/search", "/image", "/video", "/news"].map((path, ind) => (
          <Route
            key={ind} // optional: avoid full re-renders on route changes
            path={path}
            element={<Results />}
          />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default RoutesContainer;
