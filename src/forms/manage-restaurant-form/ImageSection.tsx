import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

function ImageSection() {
  const { control, watch } = useFormContext();
  const existingImageUrl = watch("imageUrl")
  return (
    <div className="space-y-2">
      <div>
        <h2>Image</h2>
        <FormDescription>
          Add an Image that will Be displayed on your Restaurant Listing in th
          Search Results. Adding a new image will over write the Existing one.
        </FormDescription>
      </div>
      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (<AspectRatio ratio={16/9}>
          <img src={existingImageUrl} className=" rounded-md object-cover h-full w-full"></img>
        </AspectRatio>)}
        <FormField
        control={control}
        name="imageFile"
        render={({field})=>(<FormItem>
            <FormControl>
                <Input className="bg-white" type="file" accept=".jpeg ,jpg , png" onChange={(event)=> field.onChange(event.target.files? event.target.files[0]:null)}/>
            </FormControl>
            <FormMessage/>
        </FormItem>)}/>
      </div>
    </div>
  );
}

export default ImageSection;
