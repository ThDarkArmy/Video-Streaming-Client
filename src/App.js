import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Videos from './components/Videos';


const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Videos}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
