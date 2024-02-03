import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {

  // always subscribe to that portion which is required and not everything in store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const hanldeClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 rounded-lg text-white bg-black"
          onClick={hanldeClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (<h1>Cart is empty Add Items to Cart</h1>)}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
