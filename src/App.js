import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import TeamDetail from './TeamDetail/TeamDetail';


function App() {
  return (
    <div className='App'>
      <Router>
       <Switch>
         <Route path ='/home'>
              <Home></Home>
         </Route>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path ='/detail/:id'>
              <TeamDetail />
         </Route>
         <Route path ='*'>
           <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
