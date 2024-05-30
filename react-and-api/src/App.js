import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import DetailCoin from "./routes/DetailCoin";
import HomeCoin from "./routes/HomeCoin";
import Main from "./routes/HomeCoin";
import Posting from "./components/Posting.js";
import Contact from "./components/Contact.js";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Header />
      <Nav />

      <Layout>
        <Switch>
          <Route path="/hello">
            <h1>Hello</h1>
          </Route>
          <Route path="/DetailCoin/:id">
            <DetailCoin />
          </Route>
          <Route exact path="/">
            <HomeCoin />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/posting">
            <Posting />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
