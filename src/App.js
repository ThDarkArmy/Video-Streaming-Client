import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import VideoPlayerPage from './pages/VideoPlayerPage';


const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path={'/watch'} component={VideoPlayerPage}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
