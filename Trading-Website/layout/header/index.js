import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navigate = useNavigate(); //A function to change the current page when a button is clicked.
  const location = useLocation(); //Provides information about the current page (or path) the user is on.

  //Takes a path and uses navigate to move the user to that page.
  const handleNavigation = (path) => {
    navigate(path);
  };

  const navButtons = [
    { label: "NSE MARKET DATA", path: "/" },
    { label: "NSE DATA GRAPH", path: "/NseGraphs" },
    { label: "BSE MARKET DATA", path: "/bse" },
    { label: "BSE DATA GRAPH", path: "/BseGraphs" },
    { label: "GLOBAL MARKET DATA", path: "/globalMarket" },
    { label: "FEEDBACK", path: "/feedback" },
  ];

  return (
    <div className="container-button">
      {navButtons.map(
        (
          button,
          index // Iterate over the navButtons array to create a button for each item
        ) => (
          <button
            key={index} // Unique key for each button, used by React for efficient rendering
            className={`button1 ${
              location.pathname === button.path ? "active" : "" // Apply "active" class if button's path matches current location
            }`}
            onClick={() => handleNavigation(button.path)} // Set up click handler to navigate to the button's path
          >
            {
              button.label //Display the label of the button
            }
          </button>
        )
      )}
    </div>
  );
};

export default Header;
