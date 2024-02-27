import React, { FC, createContext, useState } from "react";
import { ITableData } from "../components/control-employees/tableDataModel";

interface ITableDataContext {
  tableData: ITableData[];
  setTableData: React.Dispatch<React.SetStateAction<ITableData[]>>;
}

export const EmployeeContext = createContext<ITableDataContext | null>(null);

const EmployeeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tableData, setTableData] = useState<ITableData[]>([]);

  return (
    <EmployeeContext.Provider value={{ tableData, setTableData }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
