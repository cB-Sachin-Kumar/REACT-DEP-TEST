import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import { useDispatch, useSelector } from "react-redux";
import AdvancedDataTable from "../../components/ui/AdvanceDataTable";

const PrintReportContainer = () => {
  const columns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Student Name", sortable: true },
    { key: "class", label: "Class", sortable: true },
    { key: "rollNo", label: "Roll No", sortable: true },
    { key: "marks", label: "Total Marks", sortable: true },
    { key: "percentage", label: "Percentage", sortable: true },
    { key: "status", label: "Status", sortable: true },
  ];

  const data = [
    {
      id: 1,
      name: "John Smith",
      class: "10th",
      rollNo: "101",
      marks: 450,
      percentage: "90%",
      status: "Pass",
    },
    {
      id: 2,
      name: "Emma Wilson",
      class: "9th",
      rollNo: "202",
      marks: 380,
      percentage: "76%",
      status: "Pass",
    },
    {
      id: 3,
      name: "Michael Brown",
      class: "11th",
      rollNo: "303",
      marks: 420,
      percentage: "84%",
      status: "Pass",
    },
    {
      id: 4,
      name: "Sarah Davis",
      class: "12th",
      rollNo: "404",
      marks: 320,
      percentage: "64%",
      status: "Pass",
    },
    {
      id: 5,
      name: "James Johnson",
      class: "10th",
      rollNo: "505",
      marks: 200,
      percentage: "40%",
      status: "Fail",
    },
  ];

  return (
    <div>
      <AdvancedDataTable
        title="Print Staus Report "
        description="List of employees with filters, sorting, and export options."
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default PrintReportContainer;
