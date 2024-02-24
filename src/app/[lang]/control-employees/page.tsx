import Header from "@/@core/components/control-employees/Header";
import Table from "@/@core/components/control-employees/Table";
import Container from "@/@core/components/reusable/Container";
import React from "react";

const ControlEmployees = () => {
  return (
    <div>
      <Container>
        <Header />
        <Table />
      </Container>
    </div>
  );
};

export default ControlEmployees;
