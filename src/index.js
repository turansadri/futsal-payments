import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Match } from "react-router";
import "./index.css";

import App from "./components/App";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match pattern="/" component={App} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById("root")
);
