import CheckoutForm from "../molecules/checkout-form";
import CheckoutItems from "../molecules/checkout-items";

const CheckoutDetails = () => {
  return (
    <div className="grid grid-cols-2 space-x-8">
      <CheckoutForm />
      <CheckoutItems />
    </div>
  )
}

export default CheckoutDetails;
