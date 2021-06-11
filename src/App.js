import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './style/main.scss';
import HomePage from "./components/pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUS from "./components/pages/AboutUS";
import Service from "./components/pages/Service";
import Gallery from "./components/pages/Gallery";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import LayOut from "./components/LayOut";

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/about' component={AboutUS}/>
            <Route exact path='/service' component={Service}/>
            <Route exact path='/gallery' component={Gallery}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/layout' component={LayOut}/>
          </Switch>
        </Router>
      </>
  );
}

export default App;
