'use client';

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const ResponsiveTable = ({
  columns,
  data,
  headerColor,
  bodyColor = '#393939',
  hoverColor = '#fefae0',
}) => {
  const [sorting, setSorting] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  const getHead = () => {
    const headerGroup = table.getHeaderGroups()[0];
    return (
      <Tr
        key={headerGroup.id}
        className={`border-b   border-black uppercase text-[${headerColor}]`}
      >
        {headerGroup.headers.map((header) => {
          return (
            <Th
              key={header.id}
              className={`p-2 text-${
                header.column.columnDef.align || 'left'
              } font-medium`}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </Th>
          );
        })}
      </Tr>
    );
  };

  return (
    <div className='max-lg:overflow-scroll'>
      <div className='text-right'></div>
      <Table className='w-full table-auto'>
        <Thead>{getHead()}</Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              className={`border-b border-black hover:bg-[${hoverColor}]`}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <Td
                    key={cell.id}
                    className={`p-2 text-[${bodyColor}] text-${
                      cell.column.columnDef.align || 'left'
                    } font-bold`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ResponsiveTable;
