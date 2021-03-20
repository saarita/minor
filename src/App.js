import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "bootstrap/scss/bootstrap.scss";
import "./assets/styles/style.css";
import "./assets/styles/dashboard.css";
import withLayout from "./components/Layout";
import Doctors from "./pages/Doctors";
import Hospital from "./pages/Hospital";
import Notice from "./pages/Notice"

const App = () => {
  return (
    <Switch>
      <Route component={(_) => withLayout(Doctors)} path="/dashboard/doctors" />
      <Route component={(_) => withLayout(Hospital)} path="/dashboard/hospital" />
      <Route component={(_) => withLayout(Notice)} path="/dashboard/notice" />
      <Route component={(_) => withLayout(Dashboard)} path="/dashboard" />
      <Route component={Login} />
    </Switch>
  );
};

export default App;
