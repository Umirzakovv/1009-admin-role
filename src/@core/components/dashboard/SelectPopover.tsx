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
        <SelectItem value="light">За день</SelectItem>
        <SelectItem value="dark">За неделю</SelectItem>
        <SelectItem value="system">За месяц</SelectItem>
        <SelectItem value="system">За год</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectPopover;
