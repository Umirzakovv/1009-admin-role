import { FC } from "react";
import PageTitle from "../reusable/PageTitle";
import SortEmployees from "./SortEmployees";
import { Button } from "@/components/ui/button";
import AddEmployees from "./AddEmployees";

type HeaderTypes = {};

const Header: FC<HeaderTypes> = () => {
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
