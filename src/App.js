import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welcom from "./pages/Welcom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcom"/>
          </Route>
          <Route path="/welcom">
            <Welcom />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path={"/products/:productId"}>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
