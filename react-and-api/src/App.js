import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import HomeCoin from "./routes/HomeCoin";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/detailCoin/:id">
          <Detail />
        </Route>
        <Route path="/">
          <HomeCoin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
