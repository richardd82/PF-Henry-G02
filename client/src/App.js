import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar/Nav.js";
import Bootcamp from "./pages/Bootcamp/Bootcamp.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Details from "./pages/Details/Details.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Module from "./pages/Module/Module.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import userAdmin from "./components/PerfilAdministrador/userAdmin.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/bootcamp" component={NavBar} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/bootcamp/catalog" component={Catalog} />
        <Route exact path="/bootcamp/lecture/:id" component={Details} />
        <Route exact path="/bootcamp/profile/:userId" component={Profile} />
        <Route exact path="/bootcamp/module/:moduleId" component={Module} />
        <Route exact path="/bootcamp/catalog" component={Catalog} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
