import { FC } from "react";
import StatisticsCard from "./StatisticsCard";
import BarChartComponent from "./LineGraph";

type AllTabContentType = {};

const AllTabContent: FC<AllTabContentType> = () => {
  const statisticsData = [
    {
      id: 1,
      title: "Количество пользователей",
      icon: "/users.svg",
      statistics: 1056,
      statisticsStartValue: "+",
      description: "+20.1% from last month",
    },
    {
      id: 2,
      title: "Количество организаций",
      icon: "/organizations.svg",
      statistics: 7125544,
      statisticsStartValue: "+",
      description: "+20.1% from last month",
    },
    {
      id: 3,
      title: "Количество посещений",
      icon: "/visits.svg",
      statistics: 562,
      statisticsStartValue: "+",
      description: "+20.1% from last month",
    },
    {
      id: 4,
      title: "Общий доход",
      icon: "/dollar.svg",
      statistics: 12000000,
      statisticsStartValue: "$",
      description: "+20.1% from last month",
    },
  ];

  return (
    <>
      <div className="mt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statisticsData?.map((item) => {
            return (
              <StatisticsCard
                key={item?.id}
                title={item?.title}
                icon={item?.icon}
                statistics={item?.statistics}
                statisticsStartValue={item.statisticsStartValue}
                description={item?.description}
              />
            );
          })}
        </div>
      </div>
      <BarChartComponent />
    </>
  );
};

export default AllTabContent;
