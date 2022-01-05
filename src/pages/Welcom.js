import { Route } from "react-router-dom";

const Welcom = (props) => {

  return <>
    <h2>Welcom page</h2>
    <Route path="/welcom/new-user">
      <h2>Welcom new user</h2>
    </Route>
  </> 
};

export default Welcom;
