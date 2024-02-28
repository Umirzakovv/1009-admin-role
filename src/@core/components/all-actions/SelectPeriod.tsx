"use client"

import React, { FC, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const SelectPeriod: FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [date2, setDate2] = useState<Date | undefined>(new Date());
  console.log(date, date2);
  
  return (
    <Popover>
      <PopoverTrigger>
        <p className="rounded-md text-sm font-medium border h-10 px-4 py-2">С 12.12.2023 до 12.01.2024</p>
      </PopoverTrigger>
      <PopoverContent className="w-max flex p-0 m-0">
        <Calendar 
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />
        <Calendar
          mode="single"
          selected={date2}
          onSelect={setDate2}
          className="rounded-md border shadow"
        />
      </PopoverContent>
    </Popover>
  );
};

export default SelectPeriod;
