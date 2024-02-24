import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortEmployeesTypes = {};

const SortEmployees: FC<SortEmployeesTypes> = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="operators">Операторы</SelectItem>
        <SelectItem value="moderators">Модераторы</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortEmployees;
