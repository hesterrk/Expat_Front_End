import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import JournalList from "./components/JournalList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* //NEEDS TO BE PROTECTED */}
        <PrivateRoute exact path="/journallist">
          <JournalList />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
