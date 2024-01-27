import React from "react";
import { useTitle } from "../hooks/useTitle";

function Error() {
  useTitle("404");
  return <div>Error</div>;
}

export default Error;
