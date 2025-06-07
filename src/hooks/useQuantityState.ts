import { useCallback, useState } from "react";

export const useQuantityState = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityDecrease = useCallback(() => {
    if (quantity === 0) {
      return;
    }
    setQuantity(prev => {
      return --prev;
    })
  }, [quantity]);

  const handleQuantityIncrease = useCallback(
    () => {
      setQuantity(prev => {
        return ++prev;
      });
    }, []);

  const handleQuantityChange = useCallback(
    (value: number) => {
      if (!value) {
        setQuantity(0);
      }
      if (value < 0) {
        return;
      }
      setQuantity(value);
    }, [])
  return {
    quantity,
    handleQuantityChange,
    handleQuantityIncrease,
    handleQuantityDecrease,
  }
}
