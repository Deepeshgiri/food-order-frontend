export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
  pincode: string;
};

export type menuItems = {
  _id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  _id: string;
  user: string;
restaurantName:string;
  address: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: menuItems[];
  imageUrl: string;
  lastUpdated: string;
};

export type RestaurantSearchResponse ={
  data:Restaurant[],
  pagination:{
    total:number
    page:number
    pages:number
  }
}