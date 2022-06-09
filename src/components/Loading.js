import React from "react";
import {Puff} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Puff color="grey" />
    </div>
  );
};

export default Loading;
