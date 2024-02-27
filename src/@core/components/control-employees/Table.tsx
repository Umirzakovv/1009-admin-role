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

// interface Props {
//   data: TableData[];
//   setData: React.Dispatch<React.SetStateAction<TableData[]>>;
// }

const TableEmployees: FC = () => {
  const url =
    "https://1009.api.ccenter.uz/api/v1/Auth/addControlUser/all?role=null";

  const [isLoading, setisLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { tableData, setTableData } = useContext(EmployeeContext);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);

      try {
        const response = await fetch(url);
        if (!response?.ok) {
          throw new Error(`Ошибка при получение данных ${response?.status}`);
        }
        const data = await response.json();
        console.log(data);

        setTableData(data);
      } catch (err) {
        console.log("Ошибка при получения данных " + err);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <div>Loading... </div>}
      {tableData && (
        <Table className="border">
          <TableCaption>Список соотрудников</TableCaption>
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
                    <Button variant="outline">-</Button>
                    <Button variant="outline">+</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default TableEmployees;
