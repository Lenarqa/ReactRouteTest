import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h2>Products page</h2>
      <ul>
        <li><Link to="/products/book">Book</Link></li>
        <li><Link to="/products/p1">Product 2</Link></li>
        <li><Link to="/products/p3">Product 3</Link></li>
      </ul>
    </section>
  );
};

export default Products;
