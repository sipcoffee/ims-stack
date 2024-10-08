import React, { useState } from 'react'
import { Header } from '../components/Header'
import './css/Inventory.css'
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  createColumnHelper,
  SortingState,
} from '@tanstack/react-table';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

type Person = {
  id: number
  firstName: string
  lastName: string
  age: number
}

export const Inventory = () => {
  return (
    <div className='inventory__container'>
      <Header>Inventory</Header>
      <InventoryTable/>
    </div>
  )
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    header: () => 'First Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('lastName', {
    header: () => 'Last Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: (info) => info.getValue()
  })
]

const InventoryTable: React.FC = () => {
  
  const [users, setUsers] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', age: 28 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', age: 26 },
      { id: 3, firstName: 'Alice', lastName: 'Johnson', age: 35 },
      { id: 4, firstName: 'Bob', lastName: 'Smith', age: 40 },
      { id: 1, firstName: 'John', lastName: 'Doe', age: 28 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', age: 26 },
      { id: 3, firstName: 'Alice', lastName: 'Johnson', age: 35 },
      { id: 4, firstName: 'Bob', lastName: 'Smith', age: 40 },
      { id: 1, firstName: 'John', lastName: 'Doe', age: 28 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', age: 26 },
      { id: 3, firstName: 'Alice', lastName: 'Johnson', age: 35 },
      { id: 4, firstName: 'Bob', lastName: 'Smith', age: 40 },
      { id: 1, firstName: 'John', lastName: 'Doe', age: 28 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', age: 26 },
      { id: 3, firstName: 'Alice', lastName: 'Johnson', age: 35 },
      { id: 4, firstName: 'Bob', lastName: 'Smith', age: 40 },
  ])

  const [sort, setsort] = useState<SortingState>([])

  const table = useReactTable({
    data: users,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 680 }} aria-label="simple table">
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableCell key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  );
};