import React from "react";
import TableStructure from "./TableStructure";

function DataDraw() {
  let customers = require("../DataStore/customers.json");
  let employees = require("../DataStore/employees.json");
  let orders = require("../DataStore/orders.json");
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
      <TableStructure
        tableHead={customers[0]}
        tableName="customers"
        tableNo={1}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={employees[0]}
        tableName="employees"
        tableNo={2}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={orders[0]}
        tableName="orders"
        tableNo={3}
      />
    </div>
  );
}

export default DataDraw;
