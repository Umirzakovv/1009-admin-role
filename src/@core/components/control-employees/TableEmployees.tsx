"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FC, useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EmployeeContext } from "@/@core/context/employee";
import { ITableData } from "./tableDataModel";
import { getEmployees } from "@/@core/utils/getRequestTableData";
import DeleteAlert from "./DeleteAlert";
import EditEmployees from "./Editemployees";

const TableEmployees: FC = () => {
  const url =
    "https://1009.api.ccenter.uz/api/v1/Auth/addControlUser/all?role=null";

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { tableData, setTableData } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees(setTableData, setIsLoading);
  }, []);

  return (
    <div>
      {isLoading && <div>Загрузка... </div>}
      {tableData.length ? (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>№</TableHead>
              <TableHead>ФИО</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Никнейм</TableHead>
              <TableHead>Пароль</TableHead>

              <TableHead>Управление</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData?.map((item: ITableData, index: number) => {
              return (
                <TableRow key={item?.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item?.full_name}</TableCell>
                  <TableCell>{item?.role}</TableCell>
                  <TableCell>{item?.username}</TableCell>
                  <TableCell>{item?.password}</TableCell>

                  <TableCell>
                    <EditEmployees item={item} />
                    <DeleteAlert id={item?.id} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : // <NotFound />
      null}
    </div>
  );
};

export default TableEmployees;
