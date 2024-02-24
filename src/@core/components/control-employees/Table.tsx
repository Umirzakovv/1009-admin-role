import { Button } from "@/components/ui/button";
import Image from "next/image";
import DeleteAlert from "./DeleteAlert";

const Table = () => {

    

  return (
    <table className="border w-full text-center text-sm">
      <thead>
        <tr>
          <td className="font-bold border p-2">№</td>
          <td className="font-bold border">Ф.И.О</td>
          <td className="font-bold border">Роль</td>
          <td className="font-bold border">Никнейм</td>
          <td className="font-bold border">Пароль</td>
          <td className="font-bold border">Управление</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">1</td>
          <td className="border">Умирзаков Мухаммадёсин</td>
          <td className="border">Оператор</td>
          <td className="border">umirzakov</td>
          <td className="border">3848595</td>
          <td>
            <Button variant="outline" className="p-0 h-max p-1" >
              <Image src="/pen.svg" alt="edit img" width={15} height={15} />
            </Button>
            <DeleteAlert />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
