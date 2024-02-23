import { FC } from "react";

type PageTitleTypes = {
  title: string;
};
const PageTitle: FC<PageTitleTypes> = ({ title }) => {
  return <h1 className="text-3xl font-bold">{title}</h1>;
};

export default PageTitle;
