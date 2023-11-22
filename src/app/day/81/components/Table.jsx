'use client';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  createColumnHelper,
} from '@tanstack/react-table';
import { useState } from 'react';
import Image from 'next/image';

const Table = ({ data }) => {
  const [sorting, setSorting] = useState([]);
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('season', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('team', {
      cell: (info) => (
        <Image
          alt={info.getValue()}
          src={`/nba/${info.getValue()}.webp`}
          height={16}
          width={16}
        />
      ),
    }),
    columnHelper.accessor('gamePlayed', {
      cell: (info) => info.getValue(),
      header: 'Game Played',
    }),
    columnHelper.accessor('minutes', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('pointMade', {
      cell: (info) => info.getValue(),
      header: 'Field Goal',
    }),
    columnHelper.accessor('pointPercentage', {
      cell: (info) => `${info.getValue()} %`,
      header: 'Field Goal %',
    }),
    columnHelper.accessor('3pointMade', {
      cell: (info) => info.getValue(),
      header: '3 Point Made',
    }),
    columnHelper.accessor('3pointPercentage', {
      cell: (info) => `${info.getValue()} %`,
      header: '3 Point %',
    }),
    columnHelper.accessor('freeThrows', {
      cell: (info) => info.getValue(),
      header: 'Free Throws',
    }),
    columnHelper.accessor('freeThrowsPercentage', {
      cell: (info) => `${info.getValue()} %`,
      header: 'Free Throws %',
    }),
    columnHelper.accessor('rebounds', {
      cell: (info) => info.getValue(),
      header: 'Rebounds',
    }),
    columnHelper.accessor('assists', {
      cell: (info) => info.getValue(),
      header: 'Assists',
    }),
    columnHelper.accessor('points', {
      cell: (info) => info.getValue(),
      header: 'Points',
    }),
  ];
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
  return (
    <table className='w-full table-auto'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className='border-b  border-black uppercase text-[#1D1160]'
          >
            {headerGroup.headers.map((header) => (
              <th key={header.id} className='p-2 text-left font-medium'>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className='border-b border-black'>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className='p-2'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
