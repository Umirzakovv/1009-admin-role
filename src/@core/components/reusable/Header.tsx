import { FC } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Container from "./Container";
import UserAvatarModal from "../dashboard/UserAvatarModal";

type HeaderTypes = {};

const Header: FC<HeaderTypes> = () => {
  return (
    <>
      <Container>
        <header className="flex items-center justify-between p-4">
          <Logo />
          <Navbar />
          <UserAvatarModal />
        </header>
      </Container>
      <hr />
    </>
  );
};

export default Header;
