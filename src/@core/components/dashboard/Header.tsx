import { FC } from "react";
import CalendarPopover from "./CalendarPopover";
import PageTitle from "../reusable/PageTitle";
import SelectPopover from "./SelectPopover";

type HeaderTypes = {};

const Header: FC<HeaderTypes> = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <PageTitle title="Дашбоард" />
      <div className="flex items-center space-x-2" >
        <p className="text-sm">Получить данные: </p>
        <CalendarPopover />
        <SelectPopover />
      </div>
    </div>
  );
};

export default Header;
