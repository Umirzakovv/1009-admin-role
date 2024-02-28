"use client";

import Header from "@/@core/components/control-employees/Header";
import TableEmployees from "@/@core/components/control-employees/TableEmployees";
import Container from "@/@core/components/reusable/Container";
import EmployeeProvider from "@/@core/context/employee";

const ControlEmployees = () => {
  return (
    <EmployeeProvider>
      <div>
        <Container>
          <Header />
          <TableEmployees />
        </Container>
      </div>
    </EmployeeProvider>
  );
};

export default ControlEmployees;
