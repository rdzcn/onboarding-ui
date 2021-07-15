import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../config/constants/routes";
import { ContentContainer } from "./content.styles";
import Loader from "../loader/Loader";
// import PageNotFound from "../../pages/error/PageNotFound";

const Content = () => (
  <ContentContainer>
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.id}
            path={route.route}
            component={route.component}
          />
        ))}
        {/* <PageNotFound /> */}
      </Switch>
    </Suspense>
  </ContentContainer>
);

export default Content;
