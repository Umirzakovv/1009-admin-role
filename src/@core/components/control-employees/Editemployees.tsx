import { FC, useContext, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ITableData } from "./tableDataModel";
import { EmployeeContext } from "@/@core/context/employee";
import { getEmployees } from "@/@core/utils/getRequestTableData";

interface Props {
  item: ITableData;
}

const EditEmployees: FC<Props> = ({ item }) => {
  const { setTableData } = useContext(EmployeeContext);

  const [id, setId] = useState<string>(item?.id);
  const [role, setRole] = useState<string>(item?.role);
  const [username, setUsername] = useState<string>(item?.username);
  const [fullName, setFullName] = useState<string>(item?.full_name);
  const [password, setPassword] = useState<string>(item?.password);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const body = {
    full_name: fullName,
    role: role,
    username: username,
    password: password,
  };

  const handleEditClick = async () => {
    const url = `https://1009.api.ccenter.uz/api/v1/Auth/updateControlUser/${id}`;

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(
          `Произошла ошибка в процессе изменений: ${response.statusText}`
        );
      }
      getEmployees(setTableData, setIsLoading);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="p-0 h-max p-1">
          <Image src="/pen.svg" alt="edit img" width={15} height={15} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавьте новую соотрудника</DialogTitle>
          <DialogDescription>
            Он может быть оператор или модератор.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          <Select onValueChange={(e) => setRole(e)} defaultValue={role}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите роль" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="operator">Оператор</SelectItem>
              <SelectItem value="moderator">Модератор</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Ф.И.О"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Никнейм (уникальное)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <DialogFooter>
          <DialogClose>
            <Button type="submit" onClick={handleEditClick}>
              Изменить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditEmployees;
