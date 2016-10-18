import React from "react";

const Navigation = () => {
  return (
    <ul>
      <li><a href={"/"}>Calendar</a></li>
      <li><a>Players</a></li>
    </ul>
  );
};

Navigation.contextTypes = {
  router: React.PropTypes.object,
};

export default Navigation;
