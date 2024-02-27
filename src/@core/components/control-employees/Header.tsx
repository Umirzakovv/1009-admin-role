import { FC, useContext, useState } from "react";
import PageTitle from "../reusable/PageTitle";
import SortEmployees from "./SortEmployees";
import AddEmployees from "./AddEmployees";
import { EmployeeContext } from "@/@core/context/employee";

const Header: FC = () => {
  

  return (
    <div className="flex items-center justify-between p-4">
      <PageTitle title="Управление сотрудниками" />
      <div className="flex items-center gap-5">
        <SortEmployees />
        <AddEmployees />
      </div>
    </div>
  );
};

export default Header;
