import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import { useDispatch, useSelector } from "react-redux";
import AdvancedDataTable from "../../components/ui/AdvanceDataTable";

const FinalReportConatiner = () => {
  const columns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { key: "department", label: "Department", sortable: true },
    { key: "salary", label: "Salary", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "joinDate", label: "Join Date", sortable: true },
  ];

  // Dummy data
  const data = [
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      role: "Developer",
      department: "IT",
      salary: 50000,
      status: "Active",
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Sneha Verma",
      email: "sneha@example.com",
      role: "Designer",
      department: "UI/UX",
      salary: 45000,
      status: "Inactive",
      joinDate: "2022-11-05",
    },
    {
      id: 3,
      name: "Amit Singh",
      email: "amit@example.com",
      role: "Manager",
      department: "HR",
      salary: 65000,
      status: "Active",
      joinDate: "2021-06-20",
    },
    {
      id: 4,
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "Tester",
      department: "QA",
      salary: 40000,
      status: "Active",
      joinDate: "2023-04-10",
    },
  ];

  return (
    <div>
      <AdvancedDataTable
        title="Employee Directory"
        description="List of employees with filters, sorting, and export options."
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default FinalReportConatiner;
