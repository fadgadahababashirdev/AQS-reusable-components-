import React from "react";

import type { ColumnDef } from "@tanstack/react-table";

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

import { Search } from "lucide-react";

import DataTablePagination from "../../components/Pagination";

import ExportExcel from "../exportingDocuments/ExportExcell";
import ExportCSV from "../exportingDocuments/ExportCSV";

import { useFormColorStore } from "../../store/formColorStore";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKeys: (keyof TData)[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKeys,
}: DataTableProps<TData, TValue>) {
  const colors = useFormColorStore();

  // SEARCH STATE
  const [globalFilter, setGlobalFilter] =
    React.useState("");

  const table = useReactTable({
    data,
    columns,

    state: {
      globalFilter,
    },

    onGlobalFilterChange: setGlobalFilter,

    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel:
      getFilteredRowModel(),

    getPaginationRowModel:
      getPaginationRowModel(),

    initialState: {
      pagination: {
        pageSize: 10,
      },
    },

    // GLOBAL FILTER
    globalFilterFn: (
      row,
      _,
      filterValue
    ) => {
      return searchKeys.some((key) => {
        const value = String(
          row.original[key] ?? ""
        ).toLowerCase();

        return value.includes(
          filterValue.toLowerCase()
        );
      });
    },
  });

  return (
    <div
      className="rounded-lg w-full border p-3 sm:p-6 shadow-lg"
      style={{
        backgroundColor:
          colors.cardBackground,
        borderColor:
          colors.formCardBorderColor,
      }}
    >
      {/* TOP BAR */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
        {/* SEARCH */}
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{
              color: colors.inputIconsColor,
            }}
          />

          <Input
            placeholder="Search anything..."
            value={globalFilter}
            onChange={(event) =>
              setGlobalFilter(
                event.target.value
              )
            }
            className="pl-11 h-12 rounded-2xl border border-black focus:border-black focus:ring-0 focus:outline-none"
            style={{
              color: colors.h1,
            }}
          />
        </div>

        {/* EXPORT BUTTONS */}
        <div className="flex flex-wrap items-center gap-3">
          <ExportExcel
            data={data}
            buttonText="Export Excel"
            className="rounded-xl px-5 h-11 text-white border-0"
          />

          <ExportCSV
            data={data}
            buttonText="Export CSV"
            className="rounded-xl px-5 h-11 border"
          />
        </div>
      </div>

      {/* TABLE CONTAINER */}
      <div
        className="w-full overflow-x-auto rounded-2xl border"
        style={{
          borderColor:
            colors.formCardBorderColor,
        }}
      >
        <Table className="w-full min-w-max">
          {/* HEADER */}
          <TableHeader
            style={{
              backgroundColor:
                colors.inputBackgroundColor,
            }}
          >
            {table
              .getHeaderGroups()
              .map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="hover:bg-transparent border-0"
                >
                  {headerGroup.headers.map(
                    (header) => (
                      <TableHead
                        key={header.id}
                        className="h-14 text-sm font-semibold whitespace-nowrap"
                        style={{
                          color:
                            colors.formLabelColor,
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column
                                .columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  )}
                </TableRow>
              ))}
          </TableHeader>

          {/* BODY */}
          <TableBody>
            {table.getRowModel().rows
              ?.length ? (
              table
                .getRowModel()
                .rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="transition-all hover:bg-[#f8faff]"
                  >
                    {row
                      .getVisibleCells()
                      .map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="py-4 text-sm whitespace-nowrap"
                          style={{
                            color: colors.h1,
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef
                              .cell,
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
                  className="h-32 text-center text-base"
                  style={{
                    color:
                      colors.formParagraphColor,
                  }}
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <div className="mt-6">
        <DataTablePagination
          table={table}
        />
      </div>
    </div>
  );
}