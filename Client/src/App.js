import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home.jsx";
import Visualizer from "./component/Visualizer.jsx";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Timeline from "./component/Timeline";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/visualizer" exact component={Visualizer} />
        <Route path="/about" exact component={About} />
        <Route path="/timeline" exact component={Timeline} />
      </Switch>
    </>
  );
}
