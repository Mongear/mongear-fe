import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";

const CouponInput = () => {
  return (
    <div className="flex space-x-6" >
      <Input type="text" className="px-4 w-64 py-6" placeholder="Coupon Code" />
      <Button variant="destructive" className="px-8 py-6 hover:cursor-pointer"> Apply Coupon </Button>
    </div>
  )
}

export default CouponInput;
