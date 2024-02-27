import { FC, useContext, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EmployeeContext } from "@/@core/context/employee";

const SortEmployees: FC = () => {
  const { setTableData } = useContext(EmployeeContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectChange = async (e: string) => {
    const url = `https://1009.api.ccenter.uz/api/v1/Auth/addControlUser/all?role=${e}`;

    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка при получение данных ${response?.status}`);
      }
      const data = await response.json();
      setTableData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Select onValueChange={(e) => handleSelectChange(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="null">Все</SelectItem>
        <SelectItem value="operator">Операторы</SelectItem>
        <SelectItem value="moderator">Модераторы</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortEmployees;
