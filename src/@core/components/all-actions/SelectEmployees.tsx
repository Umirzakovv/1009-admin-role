"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ITableData } from "../control-employees/tableDataModel";

export function SelectEmployees() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [selectValues, setSelectValue] = React.useState<ITableData[]>([]);
  const url =
    "https://1009.api.ccenter.uz/api/v1/Auth/addControlUser/all?role=null";

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response?.ok) {
          throw new Error(`Ошибка при получение данных ${response?.status}`);
        }
        const data = await response.json();
        setSelectValue(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-max justify-between"
        >
          {value
            ? selectValues?.find((framework) => framework.username === value)
                ?.full_name
            : "Выберите соотрудника"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-max p-0">
        <Command>
          <CommandInput placeholder="Выберите соотрудника" className="h-9" />
          <CommandEmpty>Соотрудник не найден</CommandEmpty>
          <CommandGroup>
            {selectValues?.map((framework) => (
              <CommandItem
                key={framework.id}
                value={framework.username}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.full_name}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.username ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
