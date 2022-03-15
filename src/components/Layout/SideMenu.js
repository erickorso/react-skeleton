import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <aside collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <ul
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <li key="/">
          <Link to="/"><span>Home</span></Link>
        </li>
        <li key="/simple">
          <Link to="/simple"><span>Simple</span></Link>
        </li>
      </ul>
    </aside>
  );
};

export default App;
