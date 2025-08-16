import React from 'react';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
  onRowSelect?: (rows: T[]) => void;
  loading?: boolean;
}

export function DataTable<T>({ data, columns, selectable, onRowSelect, loading }: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = React.useState<T[]>([]);

  const toggleRow = (row: T) => {
    let newSelection: T[];
    if (selectedRows.includes(row)) {
      newSelection = selectedRows.filter((r) => r !== row);
    } else {
      newSelection = [...selectedRows, row];
    }
    setSelectedRows(newSelection);
    onRowSelect?.(newSelection);
  };

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {selectable && <th className="border p-2">Select</th>}
              {columns.map((col, i) => (
                <th key={i} className="border p-2 font-semibold">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-100">
                {selectable && (
                  <td className="border p-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row)}
                      onChange={() => toggleRow(row)}
                    />
                  </td>
                )}
                {columns.map((col, j) => {
                  const value =
                    typeof col.accessor === 'function'
                      ? col.accessor(row)
                      : (row as any)[col.accessor];
                  return <td key={j} className="border p-2">{value}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
