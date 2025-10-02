import { useSelector } from "react-redux";
import MyList from "./MyList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const selectedItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearALL = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mt-5">
        <button
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300"
          onClick={clearALL}
        //   disabled={true}
        >
          Clear Cart
        </button>
      </div>
      {selectedItems.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-2xl font-semibold text-gray-700">Your cart is empty</p>
          <p className="text-gray-500 mt-2">Add some items to get started!</p>
        </div>
      ) : (
        <div className="w-6/12 mx-auto my-10 p-4 border bg-gray-50 shadow-lg">
          <MyList item={selectedItems} isCart={true}/>
        </div>
      )}
    </div>
  );
};

export default Cart;
