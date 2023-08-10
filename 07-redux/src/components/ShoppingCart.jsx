import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  add_one_to_cart,
  clear_cart,
  remove_all_from_cart,
  remove_one_from_cart,
} from "../reducers/shoppingCartReducer";

const ShoppingCart = () => {
  const state = useSelector((state) => state.shopping);
  const { products, cart } = state;

  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(add_one_to_cart(id));
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch(remove_all_from_cart(id));
    } else {
      dispatch(remove_one_from_cart(id));
    }
  };

  const clearCart = () => {
    dispatch(clear_cart());
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
