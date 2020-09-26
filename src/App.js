import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import Solution from "./pages/Solution";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // const [dimensions, setDimensions] = React.useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });

  useEffect(() => {
    // Resize
    const debouncedHandleResize = debounce(function handleResize() {
      // setDimensions({
      //   height: window.innerHeight,
      //   width: window.innerWidth,
      // });
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

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
