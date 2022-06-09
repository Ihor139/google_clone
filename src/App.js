import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutesContainer from "./components/RoutesContainer";

import "./App.css";
import { StateContextProvider } from "./components/StateContextProvider";

const App = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);

  return (
    <div className={darkTheme ? "dark" : null}>
      <div className="site-container bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <StateContextProvider>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <RoutesContainer />
        </StateContextProvider>
        <Footer />
      </div>
    </div>
  );
};

export default App;
