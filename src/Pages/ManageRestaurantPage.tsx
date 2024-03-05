import {
  useCreateMyRestaurantRequest,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
  const {
    createRestaurant,
    isLoading: iscreateRestaurant,
  } = useCreateMyRestaurantRequest();
  const { restaurant } = useGetMyRestaurant();
  const {
    updateRestaurant,
    isLoading: isupdateRestaurant,
  } = useUpdateMyRestaurant();

  const isEditing = !!restaurant;
  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant:createRestaurant}
      isLoading={iscreateRestaurant||isupdateRestaurant}
    />
  );
}
