import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import KnowLedgs from "./Pages/KnowLedgs";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/competence" component={KnowLedgs} />
          <Route path="/portfolio" component={Portfolio} />
          <Route  component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
