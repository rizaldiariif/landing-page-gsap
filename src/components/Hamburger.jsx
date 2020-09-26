import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

import austin from "../images/austin.webp";
import beijing from "../images/beijing.webp";
import dallas from "../images/dallas.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";

const Hamburger = ({ state }) => {
  // Animation Refs
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const cities = [
    { name: "Austin", image: austin },
    { name: "Beijing", image: beijing },
    { name: "Dallas", image: dallas },
    { name: "New York", image: newyork },
    { name: "San Francisco", image: sanfrancisco },
  ];

  useEffect(() => {
    if (state.clicked === false) {
      // close menu
      TweenMax.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: Power3.easeInOut,
        stagger: {
          amount: 0.07,
        },
      });
      TweenMax.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      TweenMax.set(menu, {
        css: { display: "block" },
      });
      TweenMax.set([revealMenuBackground, revealMenu], {
        opacity: 1,
        height: "100%",
      });
      TweenMax.from([revealMenuBackground, revealMenu], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: Power3.easeInOut,
        stagger: {
          amount: 0.1,
        },
      });
      TweenMax.from(info, {
        duration: 1,
        y: 60,
        delay: 0.2,
        opacity: 0,
        ease: Power3.easeInOut,
      });
      TweenMax.from([line1, line2, line3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: Power3.easeInOut,
        stagger: {
          amount: 0.3,
        },
      });
    }
  }, [state]);

  const handleCity = (city) => {
    TweenMax.set(cityBackground, {
      background: `url(${city}) center center`,
    });
    TweenMax.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: Power3.easeInOut,
    });
    TweenMax.from(cityBackground, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handleCityOut = () => {
    TweenMax.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleHover = (e) => {
    TweenMax.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: Power3.easeInOut,
    });
  };

  const handleHoverOut = (e) => {
    TweenMax.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: Power3.easeInOut,
    });
  };

  return (
    <>
      <div className="hamburger-menu" ref={(el) => (menu = el)}>
        <div
          className="menu-secondary-background-color"
          ref={(el) => (revealMenuBackground = el)}
        />
        <div className="menu-layer" ref={(el) => (revealMenu = el)}>
          <div
            className="menu-city-background"
            ref={(el) => (cityBackground = el)}
          ></div>
          <div className="container">
            <div className="menu-links">
              <ul>
                <li>
                  <Link
                    ref={(el) => (line1 = el)}
                    to="/opportunity"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverOut(e)}
                  >
                    Opportunity
                  </Link>
                </li>
                <li>
                  <Link
                    ref={(el) => (line2 = el)}
                    to="/solution"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverOut(e)}
                  >
                    Solution
                  </Link>
                </li>
                <li>
                  <Link
                    ref={(el) => (line3 = el)}
                    to="/contact"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverOut(e)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="info" ref={(el) => (info = el)}>
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                  ab laborum deserunt! Quos, consequatur. Quae ut, pariatur
                  facere numquam animi mollitia ab alias excepturi sed cumque,
                  illo ipsam earum dolorum? Omnis, blanditiis? Autem doloremque
                  laudantium minima nihil iusto quidem vel voluptate? Iure,
                  ducimus. Qui porro incidunt iste ab sequi magnam.
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image)}
                    onMouseOut={handleCityOut}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
