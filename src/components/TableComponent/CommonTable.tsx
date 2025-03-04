/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react';
import Table from '@/components/Base/Table';
import Lucide, { icons } from '@/components/Base/Lucide';
import { FormCheck, FormSwitch } from '@/components/Base/Form';
import Tippy from '@/components/Base/Tippy';

interface Column {
  label: string;
  key: string;
  type?: 'text' | 'image' | 'status' | 'checkbox' | 'expand' | 'toggle';
}

interface CommonTableProps {
  columns: Column[];
  data: { rows: any[]; totalCount: number };
  expandable?: boolean;
  handleRowClick?: (index: number) => void;
  expandedRow?: number;
}

const CommonTable: React.FC<CommonTableProps> = ({
  columns,
  data,
  expandable,
  handleRowClick,
  expandedRow,
}) => {
  const getStatusStyles = (status: string) => {
    const statusStyles: Record<
      string,
      { color: string; icon: keyof typeof icons }
    > = {
      PENDING: { color: 'text-yellow-500', icon: 'Clock' },
      SUCCESS: { color: 'text-green-500', icon: 'CheckCircle' },
      FAILED: { color: 'text-red-500', icon: 'XCircle' },
    };
    return statusStyles[status] || { color: 'text-gray-500', icon: 'Info' };
  };

  // console.log(data, "data");
  // console.log(columns, "colums");

  return (
    <div className="overflow-x-auto">
      <Table className="border-b border-slate-200/60">
        <Table.Thead>
          <Table.Tr>
            {columns?.map((col, index) => (
              <Table.Td
                key={index}
                className="py-4 font-medium border-t bg-slate-50 text-slate-500 dark:bg-darkmode-400"
              >
                {col.label} {/* Ensure only the label (string) is rendered */}
              </Table.Td>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.rows?.map((row, rowIndex) => (
            <Table.Tr key={rowIndex} className="[&_td]:last:border-b-0">
              {columns.map((col, colIndex) => (
                <Table.Td
                  key={colIndex}
                  className="py-4 border-dashed dark:bg-darkmode-600"
                >
                  {col.type === 'image' ? (
                    <Tippy
                      as="img"
                      src={row[col.key] || 'https://via.placeholder.com/40'}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                      content={''}
                    />
                  ) : col.type === 'status' ? (
                    <div
                      className={`flex items-center ${
                        getStatusStyles(row[col.key]).color
                      }`}
                    >
                      <Lucide
                        icon={getStatusStyles(row[col.key]).icon}
                        className="w-5 h-5"
                      />
                      {row[col.key]}
                    </div>
                  ) : col.type === 'checkbox' ? (
                    <FormCheck.Input type="checkbox" />
                  ) : col.type === 'toggle' ? (
                    <FormSwitch className=" dark:border-red-500 rounded-lg">
                      <FormSwitch.Label
                        htmlFor="show-example-1 "
                        className="ml-0 "
                      >
                        <FormSwitch.Input
                          id="show-example-1"
                          //   onClick={}
                          className="ml-0 mr-0 border-2 border-slate-300  "
                          type="checkbox"
                        />
                      </FormSwitch.Label>
                    </FormSwitch>
                  ) : expandable && col.type === 'expand' ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => handleRowClick && handleRowClick(rowIndex)}
                    >
                      <Lucide
                        icon={expandedRow === rowIndex ? 'Minus' : 'Plus'}
                        className="w-5 h-5"
                      />
                    </div>
                  ) : (
                    row[col.key]
                  )}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default CommonTable;
