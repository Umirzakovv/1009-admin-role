import { insertSpaceEveryThirdFromEnd } from "@/@core/utils/setSpaceFromEnd";
import Image from "next/image";
import { FC } from "react";

type StatisticsCardTypes = {
  title: string;
  icon: string;
  statistics: number;
  statisticsStartValue: string;
  description: string;
};

const StatisticsCard: FC<StatisticsCardTypes> = ({
  title,
  icon,
  statistics,
  statisticsStartValue,
  description,
}) => {
  return (
    <div className="border p-[24px] rounded-xl shadow">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium mb-[8px]">{title}</p>
        <Image src={icon} alt="dollar icon" width={16} height={16} />
      </div>
      <h4 className="text-2xl font-bold ">
        {statisticsStartValue}
        {insertSpaceEveryThirdFromEnd(statistics)}
      </h4>
      <p className="text-xs text-main_grey">{description}</p>
    </div>
  );
};

export default StatisticsCard;
