import Link from "next/link";
import { FC } from "react";

type LogoTypes = {};

const Logo: FC<LogoTypes> = () => {
  return (
    <Link href="/" className="font-bold">
      АДМИН ПАНЕЛЬ
    </Link>
  );
};

export default Logo;
