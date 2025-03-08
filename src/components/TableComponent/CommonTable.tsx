/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Table from '@/components/Base/Table';
import Pagination from '@/components/Base/Pagination';
import Lucide, { icons } from '@/components/Base/Lucide';
import { FormCheck, FormSwitch, FormSelect } from '@/components/Base/Form';
import Tippy from '@/components/Base/Tippy';

interface Column {
  label: string;
  key: string;
  type?:
    | 'status'
    | 'image'
    | 'text'
    | 'checkbox'
    | 'toggle'
    | 'expand'
    | 'range'
    | 'object'
    | 'action'
    | 'limits'
    | string;
  objectKey?: string | string[];
}

interface CommonTableProps {
  columns: Column[];
  data: { rows: any[]; totalCount: number };
  expandable?: boolean;
  handleRowClick?: (index: number) => void;
  handleEditModal?: (data: any) => void;
  handleDeleteData?:(id: string) => void;
  expandedRow?: number;
}

const CommonTable: React.FC<CommonTableProps> = ({
  columns,
  data,
  expandable,
  handleRowClick,
  handleEditModal,
  handleDeleteData,
  expandedRow,
}) => {
  const getStatusStyles = (status: string) => {
    const statusStyles: Record<
      string,
      { color: string; icon: keyof typeof icons }
    > = {
      IMAGE_PENDING: { color: 'text-yellow-500', icon: 'Globe' },
      PENDING: { color: 'text-yellow-500', icon: 'Globe' },
      FAILED: { color: 'text-red-500', icon: 'XCircle' },
      DROPPED: { color: 'text-red-500', icon: 'XCircle' },
      REJECTED: { color: 'text-red-500', icon: 'XCircle' },
      BANK_MISMATCH: { color: 'text-orange-500', icon: 'FileWarning' },
      DUPLICATE: { color: 'text-orange-500', icon: 'FileWarning' },
      DISPUTE: { color: 'text-orange-500', icon: 'FileWarning' },
      ASSIGNED: { color: 'text-blue-500', icon: 'ListChecks' },
      SUCCESS: { color: 'text-green-500', icon: 'CheckCircle' },
    };
    return statusStyles[status] || { color: 'text-gray-500', icon: 'Info' };
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState({ limit: 10 });
  const { limit } = params;

  const paginatedData = data?.rows?.slice(
    (currentPage - 1) * limit,
    currentPage * limit,
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
        <span key={index} className="px-2">
          ...
        </span>
      ),
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
          {paginatedData?.map((row, rowIndex) => (
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
                        className="w-5 h-5 ml-px stroke-[2.5] mr-2"
                      />
                      {row[col.key]}
                    </div>
                  ) : col.type === 'actions' ? (
                    <div className="flex items-center justify-center">
                      <Lucide
                        icon="CheckSquare"
                        onClick={() => handleEditModal && handleEditModal(row)}
                        className="w-4 h-4 mr-2 cursor-pointer"
                      />{' '}
                      <Lucide
                        icon="Trash2"
                        onClick={() =>
                          handleDeleteData && handleDeleteData(row.id)
                        }
                        className="w-4 h-4 mr-2 cursor-pointer"
                      />
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
                          className="ml-0 mr-0 border-2 border-slate-300"
                          type="checkbox"
                          value={row[col.key] ? 'true' : 'false'}
                          // disabled={ true}
                        />
                      </FormSwitch.Label>
                    </FormSwitch>
                  ) : col.type === 'limits' ? (
                    <div>
                                <span>{row.min_payin}</span>-
                                <span>{row.max_payin}</span>
                    </div>
                  ) : col.type === 'range' ? (
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={row[col.key] || 0}
                        className="w-full cursor-pointer accent-primary" // Ensuring good styling
                      />
                      <span className="text-xs text-slate-500">
                        {row[col.key] || 0}%
                      </span>{' '}
                      {/* Display value */}
                    </div>
                  ) : expandable && col.type === 'expand' ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => handleRowClick && handleRowClick(rowIndex)}
                    >
                      <Lucide
                        icon={
                          expandedRow === rowIndex ? 'ChevronUp' : 'ChevronDown'
                        }
                        className="w-5 h-5"
                      />
                    </div>
                  ) : col.type === 'object' &&
                    typeof row[col.key] === 'object' &&
                    row[col.key] !== null ? (
                    Array.isArray(col.objectKey) ? (
                      <>
                        {col.objectKey.map((key, index) => (
                          <div key={index}>{row[col.key]?.[key] ?? ''}</div>
                        ))}
                      </>
                    ) : (
                      row[col.key]?.[col.objectKey ?? ''] ?? ''
                    )
                  ) : col.type === 'action' ? (
                    <span> action </span>
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
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
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
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </FormSelect>
      </div>
    </div>
  );
};

export default CommonTable;
