import React, { FC } from "react";
import PageTitle from "../reusable/PageTitle";
import { SelectEmployees } from "./SelectEmployees";
import SelectPeriod from "./SelectPeriod";

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <PageTitle title="Все действия соотрудников" />
      <div className="flex items-center font-medium gap-2">
        <p className="text-main_grey text-sm">Получить действии: </p>
        <SelectEmployees />
        <SelectPeriod />
      </div>
    </div>
  );
};

export default Header;
