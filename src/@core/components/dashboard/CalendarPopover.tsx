"use client";

import { FC, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

type CalendarPopover = {};

const CalendarPopover: FC<CalendarPopover> = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [date2, setDate2] = useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger>
        <div className="border rounded-md p-2">
          <p className="text-sm">с 12.12.2023 до 12.12.2024</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex w-max">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <Calendar
          mode="single"
          selected={date2}
          onSelect={setDate2}
          className="rounded-md border"
        />
      </PopoverContent>
    </Popover>
  );
};

export default CalendarPopover;
