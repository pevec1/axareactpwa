import "./styles/styles.css";

import React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Navmobile from "./components/navmobile/Navmobile";
//import Header from "./components/header/Header";
import Works from "./pages/Works";
import Certs from "./pages/Certs";
import Contacts from "./pages/Contacts";
import Aboutus from "./pages/Aboutus";
//import NotFound from "./pages/NotFound";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  //const breakpoint1 = 320;
  const breakpoint2 = 600;
  //const breakpoint3 = 1000;
  //const breakpoint4 = 1200;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint2) {
    return (
        <div className="App">
          <div className="container">
            <div className="column">
              <Navbar />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/certs" element={<Certs />} />
          </Routes>

          <Footer />
        </div>
    );
  } else if (width <= breakpoint2 && width > 0) {
    return (
        <div className="App">
          <div className="container">
            <div className="row">
              <Navmobile />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/certs" element={<Certs />} />
          </Routes>

          <Footer />
        </div>
    )
  
  }
}

export default App;
