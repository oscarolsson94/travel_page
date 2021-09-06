import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
