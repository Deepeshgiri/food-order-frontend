import { CartItem } from "@/Pages/RestaurantDetailPage";
import { Restaurant } from "@/Types";

import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";


type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
};

function OrderSummary({ restaurant, cartItems }: Props) {
  const getTotalCost = () => {
   const  totalCost = cartItems.reduce((total,cartItem)=>total+cartItem.price*cartItem.quantity , 0)
   const totalCostWithDelivery = totalCost+restaurant.deliveryPrice

   return (totalCostWithDelivery/100).toFixed(2)
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex  justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>{" "}
              {item.name}
            </span>
            <span className="flex items-center gap-1">
              $ {((item.price / 100) * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator/>
      </CardContent>
    </>
  );
}

export default OrderSummary;
