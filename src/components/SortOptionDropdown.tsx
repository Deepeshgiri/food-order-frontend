import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};
const SORT_OPTIONS = [
  {
    label: "Best Match",
    value: "bestMatch",
  },
  { label: "Delivery time", value: "estimatedDeliveryTime" },
  { label: "Delivery Price", value: "deliveryPrice" },
];
export default function SortOptionDropdown({ onChange, sortOption }: Props) {
    const selectedSort = SORT_OPTIONS.find((option)=>option.value===sortOption)?.label || SORT_OPTIONS[0].label
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full">
          {" "}
          Sort by: {selectedSort}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >{option.label}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
