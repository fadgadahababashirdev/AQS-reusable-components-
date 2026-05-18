import React from "react";

import type {
  ColumnDef,
} from "@tanstack/react-table";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";

import { Input } from "../../../@/components/ui/input";

import DataTablePagination from "../../components/Pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends {
  firstName: string;
  LastName: string;
  email: string;
  status: string;
}, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  // GLOBAL SEARCH STATE
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,

    state: {
      globalFilter,
    },

    onGlobalFilterChange: setGlobalFilter,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    initialState: {
      pagination: {
        pageSize: 2,
      },
    },

    // GLOBAL SEARCH
    globalFilterFn: (row, _, filterValue) => {
      const search = filterValue.toLowerCase();

      return (
        row.original.firstName.toLowerCase().includes(search) ||
        row.original.LastName.toLowerCase().includes(search) ||
        row.original.email.toLowerCase().includes(search) ||
        row.original.status.toLowerCase().includes(search)
      );
    },
  });

  return (
    <div>

      {/* SEARCH */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Search users..."
          value={globalFilter}
          onChange={(event) =>
            setGlobalFilter(event.target.value)
          }
          className="max-w-sm outline-none"
        />
      </div>

      {/* TABLE */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="font-normal"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <div className="mt-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}