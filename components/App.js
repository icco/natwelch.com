import React from "react";
import Router from "next/router";
import * as fathom from "../lib/fathom";

Router.onRouteChangeComplete = (url) => {
  fathom.pageview(url);
};

const App = ({ children }) => <main>{children}</main>;

export default App;
