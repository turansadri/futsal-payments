import React from "react";
import Link from "react-router/Link";

const Navigation = () => {
  return (
    <ul>
      <li><Link to="/">Calendar</Link></li>
      <li><Link to="/players">Players</Link></li>
    </ul>
  );
};

Navigation.contextTypes = {
  router: React.PropTypes.object,
};

export default Navigation;
