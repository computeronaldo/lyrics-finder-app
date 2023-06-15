import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LyricsProvider from "./LyricsProvider";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
    <LyricsProvider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lyrics/track/:id" element={<Lyrics />} />
            </Routes>
          </div>
        </>
      </Router>
    </LyricsProvider>
  );
}

export default App;
