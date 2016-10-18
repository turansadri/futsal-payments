import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Match, Miss } from "react-router";
import "./index.css";

import App from "./components/App";
import Player from "./components/Player";
import DateSelector from "./components/DateSelector";
import NotFound from "./components/NotFound";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={DateSelector} />
        <Match exactly pattern="/dates/:selectedDate" component={App} />
        <Match exactly pattern="/players" component={App} />
        <Match exactly pattern="/player/:playerName" component={Player} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById("root")
);
