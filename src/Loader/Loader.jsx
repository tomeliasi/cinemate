import React from "react";
import LoadingIcon from "../images/icons/loader.svg";

function Loader() {
  return (
    <div className="loader-screen">
      <img src={LoadingIcon}></img>
    </div>
  );
}

export { Loader };
