/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Table from '@/components/Base/Table';
import Pagination from '@/components/Base/Pagination';
import Lucide, { icons } from '@/components/Base/Lucide';
import { FormCheck, FormSwitch, FormSelect } from '@/components/Base/Form';
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

  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState({ limit: 10 });
  const { limit } = params;

  const paginatedData = data.rows.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const totalPages =
    data.totalCount && data.totalCount > 0
      ? Math.ceil(data.totalCount / limit)
      : 0;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Pagination Logic with Ellipses
  const renderPaginationLinks = () => {
    const pageNumbers = [];
    const pagesToShow = 5;

    if (totalPages <= pagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);

      if (startPage > 2) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((page, index) =>
      typeof page === 'number' ? (
        <Pagination.Link
          key={index}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Link>
      ) : (
        <span key={index} className="px-2">...</span>
      )
    );
  };

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
                {col.label}
              </Table.Td>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedData.map((row, rowIndex) => (
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
                      <FormSwitch.Label htmlFor="show-example-1 " className="ml-0 ">
                        <FormSwitch.Input
                          id="show-example-1"
                          className="ml-0 mr-0 border-2 border-slate-300"
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
      
      {/* Pagination UI */}
      <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
        <Pagination className="flex-1 w-full sm:w-auto">
          <Pagination.Link
            onClick={() => handlePageChange(1)}
            active={currentPage === 1}
          >
            <Lucide icon="ChevronsLeft" className="w-4 h-4" />
          </Pagination.Link>

          <Pagination.Link
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            active={currentPage === 1}
          >
            <Lucide icon="ChevronLeft" className="w-4 h-4" />
          </Pagination.Link>

          {renderPaginationLinks()}

          <Pagination.Link
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
            active={currentPage === totalPages}
          >
            <Lucide icon="ChevronRight" className="w-4 h-4" />
          </Pagination.Link>

          <Pagination.Link
            onClick={() => handlePageChange(totalPages)}
            active={currentPage === totalPages}
          >
            <Lucide icon="ChevronsRight" className="w-4 h-4" />
          </Pagination.Link>
        </Pagination>

        {/* Page Size Selector */}
        <FormSelect
          className="sm:w-20 rounded-[0.5rem]"
          value={params?.limit}
          onChange={(e) => {
            const newLimit = Number(e.target.value);
            setParams((prevParams) => ({
              ...prevParams,
              limit: newLimit,
            }));
            setCurrentPage(1); // Reset to page 1 when limit changes
          }}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="35">35</option>
          <option value="50">50</option>
        </FormSelect>
      </div>
    </div>
  );
};

export default CommonTable;
