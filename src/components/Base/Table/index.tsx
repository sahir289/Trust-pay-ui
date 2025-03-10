import { twMerge } from 'tailwind-merge';
import React, { createContext, useContext } from 'react';

interface TableProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<'table'> {
  dark?: boolean;
  bordered?: boolean;
  hover?: boolean;
  striped?: boolean;
  sm?: boolean;
}

const tableContext = createContext<{
  dark: TableProps['dark'];
  bordered: TableProps['bordered'];
  hover: TableProps['hover'];
  striped: TableProps['striped'];
  sm: TableProps['sm'];
}>({
  dark: false,
  bordered: false,
  hover: false,
  striped: false,
  sm: false,
});
const TableComponent: React.FC<TableProps> = ({
  className,
  dark,
  bordered,
  hover,
  striped,
  sm,
  children,
  ...props
}) => {
  return (
    <tableContext.Provider
      value={{
        dark: dark,
        bordered: bordered,
        hover: hover,
        striped: striped,
        sm: sm,
      }}
    >
      <table
        className={twMerge([
          'w-full text-left',
          dark && 'bg-dark text-white dark:bg-black/30',
          className,
        ])}
        {...props}
      >
        {children}
      </table>
    </tableContext.Provider>
  );
};

interface TheadProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<'thead'> {
  variant?: 'default' | 'light' | 'dark';
}

const theadContext = createContext<{
  variant: TheadProps['variant'];
}>({
  variant: 'default',
});
const Thead: React.FC<TheadProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  return (
    <theadContext.Provider
      value={{
        variant: variant,
      }}
    >
      <thead
        className={twMerge([
          variant === 'light' && 'bg-slate-200/60 dark:bg-slate-200',
          variant === 'dark' && 'bg-dark text-white dark:bg-black/30',
          className,
        ])}
        {...props}
      >
        {children}
      </thead>
    </theadContext.Provider>
  );
};

type TbodyProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'tbody'>
>;

const Tbody: React.FC<TbodyProps> = ({ className, children, ...props }) => {
  return (
    <thead className={className} {...props}>
      {children}
    </thead>
  );
};

type TrProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'tr'>;

const Tr: React.FC<TrProps> = ({ className, children, ...props }) => {
  const table = useContext(tableContext);
  return (
    <tr
      className={twMerge([
        table.hover &&
          '[&:hover_td]:bg-slate-100 [&:hover_td]:dark:bg-darkmode-300 [&:hover_td]:dark:bg-opacity-50',
        table.striped &&
          '[&:nth-of-type(odd)_td]:bg-slate-100 [&:nth-of-type(odd)_td]:dark:bg-darkmode-300 [&:nth-of-type(odd)_td]:dark:bg-opacity-50',
        className,
      ])}
      {...props}
    >
      {children}
    </tr>
  );
};

type ThProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'th'>;

const Th: React.FC<ThProps> = ({ className, children, ...props }) => {
  const table = useContext(tableContext);
  const thead = useContext(theadContext);
  return (
    <th
      className={twMerge([
        'font-medium px-5 py-3 border-b-2 dark:border-darkmode-300',
        thead.variant === 'light' && 'border-b-0 text-slate-700',
        thead.variant === 'dark' && 'border-b-0',
        table.dark && 'border-slate-600 dark:border-darkmode-300',
        table.bordered && 'border-l border-r border-t',
        table.sm && 'px-4 py-2',
        className,
      ])}
      {...props}
    >
      {children}
    </th>
  );
};

type TdProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'td'>;

const Td: React.FC<TdProps> = ({ className, children, ...props }) => {
  const table = useContext(tableContext);
  return (
    <td
      className={twMerge([
        'px-5 py-3 border-b dark:border-darkmode-300',
        table.dark && 'border-slate-600 dark:border-darkmode-300',
        table.bordered && 'border-l border-r border-t',
        table.sm && 'px-4 py-2',
        className,
      ])}
      {...props}
    >
      {children}
    </td>
  );
};
const Table = Object.assign(TableComponent, {
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
});

export default Table;
