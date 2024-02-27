import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectPopoverTypes = {};

const SelectPopover: FC<SelectPopoverTypes> = () => {
  return (
    <Select>
      <SelectTrigger className="w-[200px] h-max">
        <SelectValue placeholder="За день" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="day">За день</SelectItem>
        <SelectItem value="week">За неделю</SelectItem>
        <SelectItem value="month">За месяц</SelectItem>
        <SelectItem value="year">За год</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectPopover;
