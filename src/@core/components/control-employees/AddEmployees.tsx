"use client";

import { FC } from "react";

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
            placeholder="Никнейм (уникальное)"
            autoComplete="off"
          />
          <Input type="password" placeholder="Пароль" />
        </div>

        <DialogFooter>
          <Button type="submit">Добавить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmployees;
