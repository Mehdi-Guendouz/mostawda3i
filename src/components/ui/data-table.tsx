import * as React from "react"
import { Plus } from 'react-feather';

import { Button } from "@/components/ui/button"

import {
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { DataTablePagination } from "@/components/ui/data-table-pagination"

interface DataTableProps<TData, TValue> {
  title : string
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  filterColumnKey: string
}

export function DataTable<TData, TValue>({
  title,
  columns,
  data,
  filterColumnKey,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
  <div>
    <div className="flex items-center justify-between mb-12">
      <h3 className="font-bold text-4xl text-title-blue">{title}</h3>
      <Button className="font-bold text-title-blue border border-title-blue bg-white"><Plus className="h-5 w-5 mr-2" />Ajouter {title}</Button>
    </div>
    <div className="rounded-2xl border">
          <div className="w-[100%] flex justify-between">
            <h3 className="font-bold text-xl text-title-blue pt-4 ml-8">{title}</h3>
            <div className="flex items-center py-4 mr-8">
                  <Input
                  placeholder="Filter products..."
                  value={(table.getColumn(filterColumnKey)?.getFilterValue() as string) ?? ""}
                  onChange={(event) =>
                    table.getColumn(filterColumnKey)?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                  />
            </div>
          </div>
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
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  </div>
  )
}
