import React from "react";
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SearchContainer from './bench/search_container';
import BenchFormContainer from './bench/bench_form_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path='/benches/new' component={BenchFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;