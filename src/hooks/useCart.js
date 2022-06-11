import cartSelector from "../store/selectors/cartSelector";
import { cartActions } from "../store/slices/cartSlice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const dispatch = useDispatch();

  const products = useSelector(cartSelector.selectProducts);
  const totalPrice = useSelector(cartSelector.selectTotalPrice);
  const totalQuantity = useSelector(cartSelector.selectTotalQuantity);

  const handleAddToCart = useCallback(
    (product, quantity) => {
      dispatch(cartActions.addToCart({ product, quantity }));
    },
    [dispatch]
  );

  return {
    products,
    totalPrice,
    totalQuantity,
    handleAddToCart,
  };
};

export default useCart;

// Component -> hook -> store
