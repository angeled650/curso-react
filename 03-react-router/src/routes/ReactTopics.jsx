import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReactTopics = () => {
  return (
    <>
      <h3>React</h3>
      <ul>
        <li>
          <Link to={"jsx"}>JSX</Link>
        </li>
        <li>
          <Link to={"props"}>Props</Link>
        </li>
        <li>
          <Link to={"state"}>State</Link>
        </li>
        <li>
          <Link to={"effect"}>Effect</Link>
        </li>
        <li>
          <Link to={"componentes"}>Componentes</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default ReactTopics;
