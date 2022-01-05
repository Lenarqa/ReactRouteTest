import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* <Link to="/welcom">Welcom</Link> */}
            <NavLink activeClassName={classes.active} to="/welcom">Welcom</NavLink>
          </li>
          <li>
            {/* <Link to="/products">Products</Link> */}
            <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
