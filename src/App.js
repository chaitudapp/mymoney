
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import {UseAuthContext} from './hooks/UseAuthContext'



function App() {

  const {authIsReady,user} = UseAuthContext()
  return (
    <div className="App">
      {authIsReady &&(
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path = "/">
            {!user && <Redirect to ="/login" />}
            {user && <Home /> }

          </Route> 
          <Route path = "/login" >
            {user && <Redirect to ="/" />}
            {!user && <Login />}
          </Route>
          <Route path = "/signup">
            {user && <Redirect to = "/"/>}
            {!user && <Signup />}
          </Route>
        </Switch>
    </BrowserRouter>
    )}

    </div>
  );
}

export default App;
