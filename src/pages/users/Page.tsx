import type { User } from "./column";
import { columns } from "./column";

import { DataTable } from "./data-table";

function getData(): User[] {
  return [
    {
      id: "728ed52f",
      firstName: "John",
      LastName: "Ntwari",
      status: "pending",
      email: "john@example.com",
    },
    {
      id: "489e1d42",
      firstName: "Alice",
      LastName: "Mugabo",
      status: "approved",
      email: "alice@example.com",
    },
    {
      id: "f93jd821",
      firstName: "Kevin",
      LastName: "Iradukunda",
      status: "active",
      email: "kevin@example.com",
    },
    {
      id: "j29sk221",
      firstName: "Sarah",
      LastName: "Uwase",
      status: "inactive",
      email: "sarah@example.com",
    },
  ];
}

export default function DemoPage() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}