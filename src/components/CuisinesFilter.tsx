import { cuisineList } from "@/config/Restaurant-option-configs";

import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

function CuisinesFilter({
  onChange,
  isExpanded,
  selectedCuisines,
  onExpandedClick,
}: Props) {
  const handleCuisineReset = () => onChange([]);

  const handleCuisineChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;
    const newCuisneList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisneList);
  };
  return (
    <>
      <div className="flex justify-between items-center px-2 ">
        <div className="text-md font-semibold mb-2"> Filter By Cuisines</div>
        <div
          onClick={handleCuisineReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-600"
        >
          Reset Filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div className="flex">
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisineChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}
        <Button
          variant="link"
          className="mt-4 flex-1"
          onClick={onExpandedClick}
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              {" "}
              view less <ChevronUp></ChevronUp>
            </span>
          ) : (
            <span className="flex flex-row items-center">
              {" "}
              view more <ChevronDown></ChevronDown>
            </span>
          )}
        </Button>
      </div>
    </>
  );
}

export default CuisinesFilter;
