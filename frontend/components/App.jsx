import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SearchContainer from './bench/search_container';
import BenchFormContainer from './bench/bench_form_container';
import BenchShowContainer from './bench/bench_show_container';
import NotFound from "./errors/not_found";

const App = () => (
  <div>
    <header className='main-header'>
      <Link to='/'><h1>Bench BnB</h1></Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path='/benches/new' component={BenchFormContainer} />
      <Route path='/benches/:benchId' component={BenchShowContainer} />
      <Route exact path="/" component={SearchContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;