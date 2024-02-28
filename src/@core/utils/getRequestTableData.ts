import { ITableData } from "../components/control-employees/tableDataModel";

const url =
  "https://1009.api.ccenter.uz/api/v1/Auth/addControlUser/all?role=null";

export const getEmployees = async (
  setData: (data: ITableData | null) => void,
  setIsLoading: (setIsLoading: boolean) => void
) => {
  setIsLoading(true);
  try {
    const response = await fetch(url);
    if (!response?.ok) {
      throw new Error(`Ошибка при получение данных ${response?.status}`);
    }
    const data = await response.json();
    setData(data);
  } catch (err) {
    console.log("Ошибка при получения данных " + err);
  } finally {
    setIsLoading(false);
  }
};
