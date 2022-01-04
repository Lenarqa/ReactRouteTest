import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcom">Welcom</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
