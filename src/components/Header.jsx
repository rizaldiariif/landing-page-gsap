import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  const [state, setState] = useState({
    clicked: false,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();

    if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">HAMBRG.</Link>
          </div>
          <div className="menu">
            <button onClick={handleMenu} disabled={disabled}>
              {state.menuName}
            </button>
          </div>
        </div>
      </header>
      <Hamburger state={state} />
    </>
  );
};

export default withRouter(Header);
