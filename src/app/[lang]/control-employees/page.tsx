"use client";

import Header from "@/@core/components/control-employees/Header";
import TableEmployees from "@/@core/components/control-employees/TableEmployees";
// import { TableData } from "@/@core/components/control-employees/tableDataModel";
import Container from "@/@core/components/reusable/Container";
import EmployeeProvider from "@/@core/context/employee";
import React, { useContext, useState } from "react";

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
