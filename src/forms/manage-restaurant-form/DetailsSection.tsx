import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

function DetailsSection() {
  const { control } = useFormContext();

  return (
    <div className="space-y-2 p-2">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>

        <FormDescription>
          Enter the details about your Restaurant
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <div className="flex gap-4 ">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </div>
      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Address of restaurant</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <div className="flex gap-4 ">
        <FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Price ($)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="max-w-[50%] bg-white "
                  placeholder="2.50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </div>
      <div className="flex gap-4 ">
        <FormField
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="max-w-[50%] bg-white "
                  placeholder="5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </div>
    </div>
  );
}

export default DetailsSection;
