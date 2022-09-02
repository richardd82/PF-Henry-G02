import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import Bootcamp from './pages/Bootcamp/Bootcamp.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Details from './pages/Details/Details.jsx';
import Landing from './pages/Landing/Landing.jsx';
import Module from './pages/Module/Module.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Profile from './pages/Profile/Profile.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/bootcamp" component={NavBar} />
      <Route path="/bootcamp" component={Bootcamp} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/bootcamp/catalog" component={Catalog} />
<<<<<<< HEAD
        <Route exact path="/bootcamp/lecture/:id" component={Details} />
=======
        <Route exact path="/bootcamp/details/classes/:id" component={Details} />
>>>>>>> 38be8d2 (SearchBar in the NavBar and routing details changes)
        <Route exact path="/bootcamp/profile/:userId" component={Profile} />
        <Route exact path="/bootcamp/module/:moduleId" component={Module} />
        <Route exact path="/bootcamp/catalog" component={Catalog} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
