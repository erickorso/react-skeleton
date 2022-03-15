import React from "react";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <aside>
      <div className="logo" />
      <ul theme="dark" mode="inline">
        <li key="/">
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li key="/simple">
          <Link to="/simple">
            <span>Simple</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default App;
