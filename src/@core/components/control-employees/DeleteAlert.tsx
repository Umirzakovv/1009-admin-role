import { FC, useContext, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getEmployees } from "@/@core/utils/getRequestTableData";
import { EmployeeContext } from "@/@core/context/employee";

interface Props {
  id: string;
}

const DeleteAlert: FC<Props> = ({ id }) => {
  const url = `https://1009.api.ccenter.uz/api/v1/Auth/deleteControlUser/${id}`;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setTableData } = useContext(EmployeeContext);

  const handleDeleteClick = async () => {
    console.log(id);

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete data: ${response.statusText}`);
      }
      getEmployees(setTableData, setIsLoading);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="p-0 h-max p-1">
          <Image src="/trash.svg" alt="delete img" width={15} height={15} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Вы хотите удалить этого соотрудника?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Это действие не может быть отменено. Это приведет к безвозвратному
            удалению вашего соотрудника.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteClick}>Да</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
