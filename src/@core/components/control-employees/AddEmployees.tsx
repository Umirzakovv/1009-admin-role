"use client";

import { FC, useContext, useRef, useState } from "react";

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
import { getEmployees } from "@/@core/utils/getRequestTableData";
import { EmployeeContext } from "@/@core/context/employee";

const AddEmployees: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUserNameUnique, setIsUserNameUnique] = useState<boolean>(false);
  const { setTableData } = useContext(EmployeeContext);

  const [role, setRole] = useState<string>("");
  const fullNameRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const body = {
    full_name: fullNameRef.current?.value,
    role: role,
    username: userNameRef.current?.value,
    password: passwordRef.current?.value,
  };

  const handleCheckUniquenessChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const url = `https://1009.api.ccenter.uz/api/v1/Auth/addControlUser/search?username=${e?.target?.value}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Ошибка при получение данных ${res?.status}`);
      }
      const data = await res.json();
      setIsUserNameUnique(data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const handleFormSubmit = async () => {
    const url = "https://1009.api.ccenter.uz/api/v1/Auth/addControlUser";
    console.log(body);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Ошибка при получение данных: ${response.statusText}`);
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
        <Button>Добавить соотрудника</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавьте новую соотрудника</DialogTitle>
          <DialogDescription>
            Он может быть оператор или модератор.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          <Select onValueChange={(e) => setRole(e)}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите роль" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="operator">Оператор</SelectItem>
              <SelectItem value="moderator">Модератор</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="Ф.И.О" ref={fullNameRef} />
          <Input
            type="text"
            placeholder="Никнейм (уникальное)"
            onChange={(e) => handleCheckUniquenessChange(e)}
            ref={userNameRef}
          />
          {isUserNameUnique ? (
            <p className="text-red-500 text-xs">Такой никнейм уже занят</p>
          ) : (
            ""
          )}
          <Input type="password" placeholder="Пароль" ref={passwordRef} />
        </div>

        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              disabled={isUserNameUnique}
              onClick={handleFormSubmit}
            >
              {!isLoading ? "Добавить" : "Загрузка"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmployees;
