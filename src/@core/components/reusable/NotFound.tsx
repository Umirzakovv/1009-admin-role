import Image from "next/image";
import React, { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="grid place-items-center gap-10 mt-10">
      <p>По данному запросу ничего не найдено</p>
      <Image src="/not-found.svg" alt="not found img" width={30} height={30} />
    </div>
  );
};

export default NotFound;
