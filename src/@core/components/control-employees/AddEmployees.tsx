"use client";

import { FC, useState } from "react";

import {
  Dialog,
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

const AddEmployees: FC = () => {
  const [isUserNameUnique, setIsUserNameUnique] = useState<boolean>(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = `https://1009.api.ccenter.uz/api/v1/Auth/addControlUser/search?username=${e?.target?.value}`;
    console.log(url);

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Добавить соотрудника</Button>
        {/* <p className="border p-2 rounded-md text-sm text-white bg-main_black ">
          Добавить соотрудника
        </p> */}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавьте новую соотрудника</DialogTitle>
          <DialogDescription>
            Он может быть оператор или модератор.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Выберите роль" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="operator">Оператор</SelectItem>
              <SelectItem value="moderator">Модератор</SelectItem>
            </SelectContent>
          </Select>

          <Input type="text" placeholder="Ф.И.О" />
          <Input
            type="text"
            placeholder="Никнейм (уникальное)" // value={userName}
            onChange={handleChange}
          />
          {isUserNameUnique ? (
            <p className="text-red-500 text-xs">Такой никнейм уже занят</p>
          ) : (
            ""
          )}
          <Input type="password" placeholder="Пароль" />
        </div>

        <DialogFooter>
          <Button type="submit" disabled={isUserNameUnique}>
            Добавить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmployees;
