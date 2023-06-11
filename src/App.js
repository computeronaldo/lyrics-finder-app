import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </LyricsProvider>
  );
}

export default App;
