import React from "react";
import { createBrowserHistory } from "history";
import { Switch, Router, Route } from "react-router-dom";
import CompositionRoot from "../CompositionRoot";

export const history = createBrowserHistory();

const composition = CompositionRoot.resolve();
const factoryProject = composition.FactoryProjectPage();
const factoryAbout = composition.FactoryAboutPage();
const factoryContact = composition.FactoryContactPage();

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact>
        {factoryProject()}
      </Route>
      <Route path="/about/" exact>
        {factoryAbout()}
      </Route>
      <Route path="/contact/" exact>
        {factoryContact()}
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
