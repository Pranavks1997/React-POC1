import React, { useEffect } from "react";
import { Router, Route, Redirect, useLocation } from "react-router-dom";
import { routes } from "./routes";
import history from './history';
import HomePage from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails.jsx";

const RoutesContainer = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // <Provider store={store}>
    <Router history={history}>
      <Route path={routes.home.new} component={HomePage} />
      <Route path={routes.products.view(":productID")} component={ProductsDetails} />

      <Route exact path={routes.products.new} component={ProductsDetails} />

      {/* <Redirect to={routes.home.new} /> */}
    </Router>
    // </Provider>
  );
};

export default RoutesContainer;
