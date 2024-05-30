import React from "react";

const Employee = () => {
  const employees = [
    { name: "John Doe", age: 30, position: "Software Engineer", salary: 80000 },
    { name: "Jane Smith", age: 28, position: "Data Analyst", salary: 65000 },
    {
      name: "Michael Johnson",
      age: 35,
      position: "Project Manager",
      salary: 90000,
    },
    {
      name: "Emily Davis",
      age: 32,
      position: "Marketing Specialist",
      salary: 70000,
    },
    { name: "David Brown", age: 33, position: "HR Manager", salary: 85000 },
    {
      name: "Sarah Wilson",
      age: 29,
      position: "Graphic Designer",
      salary: 60000,
    },
    {
      name: "Robert Martinez",
      age: 31,
      position: "Financial Analyst",
      salary: 75000,
    },
    {
      name: "Jessica Lee",
      age: 34,
      position: "Product Manager",
      salary: 95000,
    },
    {
      name: "Christopher Taylor",
      age: 36,
      position: "Sales Director",
      salary: 100000,
    },
    {
      name: "Amanda Anderson",
      age: 27,
      position: "Customer Support Representative",
      salary: 55000,
    },
  ];
  return (
    <div>
      <h2>Employee Details</h2>
      <table class="table">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
        </tr>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <th scope="row"></th>
                <td align="center">{employee.name}</td>
                <td align="center">{employee.age}</td>
                <td align="center">{employee.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
