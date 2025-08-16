import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { DataTable, Column } from './DataTable';

// Define the type for table rows
type Person = { id: number; name: string; age: number; city: string };

// Sample data
const initialData: Person[] = [
  { id: 1, name: 'Alice', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', age: 30, city: 'London' },
  { id: 3, name: 'Charlie', age: 35, city: 'Paris' },
  { id: 4, name: 'Diana', age: 28, city: 'Tokyo' },
];

// Define columns using the correct Column<Person> type
const columns: Column<Person>[] = [
  { header: 'Name', accessor: 'name', sortable: true },
  { header: 'Age', accessor: 'age', sortable: true },
  { header: 'City', accessor: 'city', sortable: true },
];

// Storybook meta
const meta: Meta<typeof DataTable<Person>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable<Person>>;

// --------------------
// Default Table
// --------------------
export const Default: Story = {
  render: (args) => {
    const [data, setData] = useState(initialData);
    return <DataTable {...args} data={data} />;
  },
  args: {
    columns: columns,
  },
};

// --------------------
// Selectable Table
// --------------------
export const Selectable: Story = {
  render: (args) => {
    const [data, setData] = useState(initialData);
    return <DataTable {...args} data={data} />;
  },
  args: {
    columns: columns,
    selectable: true,
  },
};

// --------------------
// Loading Table
// --------------------
export const Loading: Story = {
  render: (args) => {
    return <DataTable {...args} data={[]} />;
  },
  args: {
    columns: columns,
    loading: true,
  },
};

// --------------------
// Empty Table
// --------------------
export const Empty: Story = {
  render: (args) => {
    return <DataTable {...args} data={[]} />;
  },
  args: {
    columns: columns,
  },
};
