import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoadingPage from "../LoadingPage";

const ShoppingPage = lazy(() => import("hardvare-shopping-page"));

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Suspense fallback={<LoadingPage />}>
          <ShoppingPage />
        </Suspense>
      </Route>
    </Switch>
  </Router>
);

export default App;
