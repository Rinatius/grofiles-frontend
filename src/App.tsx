import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import Node from "./components/node/Node";
import {ParamTypes} from "./types/types";
import Notfound from "./components/notfound/Notfound";


const Home = () => <h2>Home</h2>;

const NodeRedirect = () => {
  const { pk } = useParams<ParamTypes>()
  let pkInt: bigint;
  try {
    pkInt = BigInt(pk)
  }
  catch {
    return <Notfound message="PK is not an integer." />;
  }
  return <Node pk={pkInt} />;
}


const App = () => {
  //const match = useRouteMatch();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={"/n/:pk"}>
            <NodeRedirect />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;