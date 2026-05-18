import type { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../@/components/ui/dropdown-menu";

import { Button } from "../../../../@/components/ui/button";

import {
  MoreHorizontal,
  Pencil,
  Trash2,
  RefreshCcw,
} from "lucide-react";

// USER TYPE
export type User = {
  id: string;
  firstName: string;
  LastName: string;
  email: string;
  status:
    | "pending"
    | "active"
    | "inactive"
    | "approved"
    | "rejected";
};

// TABLE COLUMNS
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    accessorKey: "firstName",
    header: "First Name",
  },

  {
    accessorKey: "LastName",
    header: "Last Name",
  },

  {
    accessorKey: "email",
    header: "Email",
  },

  // ACTIONS COLUMN
  {
    id: "actions",

    header: "Actions",

    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 cursor-pointer"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            {/* EDIT */}
            <DropdownMenuItem
              onClick={() =>
                console.log("Edit", user.id)
              }
              className="cursor-pointer"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            {/* UPDATE */}
            <DropdownMenuItem
              onClick={() =>
                console.log("Update", user.id)
              }
              className="cursor-pointer"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Update
            </DropdownMenuItem>

            {/* DELETE */}
            <DropdownMenuItem
              onClick={() =>
                console.log("Delete", user.id)
              }
              className="cursor-pointer text-red-500"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];