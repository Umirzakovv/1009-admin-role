import { FC } from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl block mt-0 mb-0 mr-auto ml-auto">
      {children}
    </div>
  );
};

export default Container;
