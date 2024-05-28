import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailCoin from "./routes/DetailCoin";
import HomeCoin from "./routes/HomeCoin";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/DetailCoin/:id">
          <DetailCoin />
        </Route>
        <Route path="/">
          <HomeCoin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
