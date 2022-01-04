import { Fragment } from "react";
import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcom from "./pages/Welcom";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Route path="/welcom">
          <Welcom />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
