import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import Solution from "./pages/Solution";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/opportunity" component={Opportunity} exact />
      <Route path="/solution" component={Solution} exact />
      <Route path="/contact" component={Contact} exact />
    </BrowserRouter>
  );
}

export default App;
