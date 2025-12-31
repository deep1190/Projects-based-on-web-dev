import React, { useState } from "react";
import CustomTable from "../../component/table";
import "./index.css";
import MyForm from "./form";
import { employeeHeaders, employeeData } from "../../constants/empdata";
const EmployeeTable = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div id="head" className="App-Table mt-10">
      <h1 className="heading1">*---------EMPLOYEE DATA---------*</h1>
      <hr />
      <CustomTable headers={employeeHeaders} data={employeeData} />
      <hr />
      <button className="button" type="button" onClick={handleShowForm}>
        {showForm ? "Hide Form" : "Add New Emp Details"}
      </button>
      {showForm && <MyForm />}
    </div>
  );
};

export default EmployeeTable;
