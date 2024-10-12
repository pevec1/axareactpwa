import "./styles/styles.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Works from "./pages/Works";
import Contacts from "./pages/Contacts";
import Certs from "./pages/Certs";
import Navbar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Func from "./pages/Func";
import Plug from "./pages/Plug";
//import Header from "./components/header/Header";
import NotFound from "./pages/NotFound";
function App() {
     return (
       <Router>
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
             <Route path="/func" element={<Func />} />
             <Route path="/Plug" element={<Plug />} />
             <Route path="*" element={<NotFound />} />
           </Routes>

           <Footer />
         </div>
       </Router>
     );
}

export default App;
