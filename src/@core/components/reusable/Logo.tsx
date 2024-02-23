import Link from "next/link";
import { FC } from "react";

type LogoTypes = {};

const Logo: FC<LogoTypes> = () => {
  return (
    <Link href="/" className="font-bold text-xl">
      Админ панель | 1009
    </Link>
  );
};

export default Logo;
