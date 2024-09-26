import { useState, useRef } from "react";

import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Ourprogram from "./components/Ourprogram";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  let [playstate, setplaystate] = useState(false);

  return (
    <>
      <Navbar />
      <Main />
      <Ourprogram />
      <About setplaystate={setplaystate} />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoPlayer playstate={playstate} setplaystate={setplaystate} />
    </>
  );
}

export default App;
