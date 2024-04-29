import "./styles/styles.css";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Navmobile from "./components/navmobile/Navmobile";
import Header from "./components/header/Header";
import Works from "./pages/Works";
import Reacts from "./pages/Reacts";
import Contacts from "./pages/Contacts";
import Aboutus from "./pages/Aboutus";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint1 = 320;
  const breakpoint2 = 1000;
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
        <Router>
          <div className="container">
            <div className="column">
              <Navbar />
            </div>
          </div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            {/* <Route path="/reacts" element={<Reacts />} /> */}
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  } else if (width < breakpoint2 && width > 0) {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <div className="row">
              <Navmobile />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            {/* <Route path="/reacts" element={<Reacts />} /> */}
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
