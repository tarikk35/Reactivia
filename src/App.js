import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import NotFound from "./pages/NotFound/NotFound";
import Quiz from "./pages/Quiz/Quiz";
import SelectCategory from "./pages/SelectCategory/SelectCategory";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  // If route is only like "localhost:3000", Landing page will show. Everything else will be in switch statement.
  // This makes it easier to route to NotFound page.
  return (
    <Fragment>
      <Route exact path="/" component={Landing} />
      <Route
        path={"/(.+)"}
        render={() => {
          return (
            <Switch>
              <Route exact path="/quiz/:id" component={Quiz} />
              <Route exact path="/pick-category" component={SelectCategory} />
              <Route exact path="/error" component={ErrorPage} />
              <Route component={NotFound} />
            </Switch>
          );
        }}
      ></Route>
    </Fragment>
  );
};

export default App;
