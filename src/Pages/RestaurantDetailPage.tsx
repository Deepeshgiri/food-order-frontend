import { menuItems as MenuItemType } from "@/Types";
import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItem from "@/components/MenuItem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  price: number;
  name: string;
  quantity: number;
};
const RestaurantDetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (menuItem: MenuItemType) => {
    setCartItems((prevCartItem) => {
      const existingCartItem = prevCartItem.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      let updatedCartItem;
      if (existingCartItem) {
        updatedCartItem = prevCartItem.map((cartItems) =>
          cartItems._id === menuItem._id
            ? { ...cartItems, quantity: cartItems.quantity + 1 }
            : cartItems
        );
      } else {
        updatedCartItem = [
          ...prevCartItem,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }
      return updatedCartItem;
    });
  };

  if (isLoading || !restaurant) {
    return "LOADING...";
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 9}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />

          <span className="text-2xl font-bold tracking-tight "> Menu </span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItem
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            ></MenuItem>
          ))}
        </div>
        <div>
          <Card>
            <OrderSummary
              restaurant={restaurant}
              cartItems={cartItems}
            ></OrderSummary>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
