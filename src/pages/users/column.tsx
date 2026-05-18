import type{ ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.

export type User = {
  id: string;
  firstName: string;
  LastName: string;
  email: string;
  status: "pending" | "active" | "inactive" | "approved" | "rejected";
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "firstName",
    header: "FirstName",
  },
  {
    accessorKey: "LastName",
    header: "LastName",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
