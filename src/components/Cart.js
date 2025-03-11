import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());
  }

  return (
    <div>
      <div className="mx-auto w-6/12  p-4 m-4  flex justify-between">
        <p className="text-2xl font-bold ">Cart</p>
        <button className="p-2 bg-black text-white cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
      </div>
      {cartItems.length === 0 && <h1 className="mx-auto text-center text-4xl">Please your cart is empty...add items to cart</h1>}
      <div className="mx-auto w-6/12 ">
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
