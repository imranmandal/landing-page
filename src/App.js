import Header from "./component/Header";
import Detail from "./component/Detail";
import Footer from "./component/Footer";
import Copyright, {  } from "./component/Copyright";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/About";

function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" >
              <Header />
              <Detail />
            </Route>

            <Route path="/about">
              <About />
            </Route>
            
          </Switch>
          <Footer />
          <Copyright />
        </Router>
      </div>
    
  );
}

export default App;
