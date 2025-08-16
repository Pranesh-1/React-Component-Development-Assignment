import React, { useState, useEffect } from 'react';
import { InputField } from './components/InputField/InputField';
import { DataTable, Column } from './components/DataTable/DataTable';
import './index.css';

interface Person {
  id: number;
  name: string;
  age: number;
  city: string;
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isInputLoading, setIsInputLoading] = useState(false);

  // InputField states
  const [standardInput, setStandardInput] = useState('');
  const [invalidInput, setInvalidInput] = useState('invalid value');
  const [loadingInput, setLoadingInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [filledInput, setFilledInput] = useState('');
  const [ghostInput, setGhostInput] = useState('');
  const [smallInput, setSmallInput] = useState('');
  const [largeInput, setLargeInput] = useState('');

  // DataTable states
  const [tableData, setTableData] = useState<Person[]>([]);
  const [isTableLoading, setIsTableLoading] = useState(false);

  const initialData: Person[] = [
    { id: 1, name: 'Alice', age: 25, city: 'New York' },
    { id: 2, name: 'Bob', age: 30, city: 'London' },
    { id: 3, name: 'Charlie', age: 35, city: 'Paris' },
    { id: 4, name: 'Diana', age: 28, city: 'Tokyo' },
  ];

  // Toggle theme
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  // DataTable columns
  const columns: Column<Person>[] = [
    { header: 'Name', accessor: 'name', sortable: true },
    { header: 'Age', accessor: 'age', sortable: true },
    { header: 'City', accessor: 'city', sortable: true },
  ];

  // Load sample data
  useEffect(() => {
    handleLoadData();
  }, []);

  const handleLoadData = () => {
    setIsTableLoading(true);
    setTimeout(() => {
      setTableData(initialData);
      setIsTableLoading(false);
    }, 1500);
  };

  const handleClearData = () => {
    setTableData([]);
  };

  return (
    <div className="min-h-screen p-8 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">Assignment Preview</h1>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* InputField Section */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-6 border-b pb-3 text-gray-900 dark:text-white">InputField Component</h2>
          <div className="space-y-8">
            {/* Standard Input */}
            <InputField
              label="Standard Text Input"
              placeholder="Enter text..."
              helperText="This is a simple text input."
              value={standardInput}
              onChange={(e) => setStandardInput(e.target.value)}
              variant="outlined"
              size="md"
              clearable
            />

            {/* Invalid State */}
            <InputField
              label="Invalid State"
              placeholder="Invalid input"
              value={invalidInput}
              onChange={(e) => setInvalidInput(e.target.value)}
              errorMessage="This field is required."
              invalid
              variant="outlined"
              size="md"
            />

            {/* Disabled State */}
            <InputField
              label="Disabled State"
              placeholder="This is disabled"
              value="Can't edit me"
              onChange={() => {}}
              disabled
              variant="filled"
              size="md"
            />

            {/* Loading State */}
            <InputField
              label="Loading State"
              placeholder="Fetching data..."
              value={loadingInput}
              onChange={(e) => setLoadingInput(e.target.value)}
              loading={isInputLoading}
              variant="outlined"
              size="md"
            />
            <button
              onClick={() => {
                setIsInputLoading(true);
                setTimeout(() => setIsInputLoading(false), 2000);
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Toggle Input Loading
            </button>

            {/* Password Input */}
            <InputField
              label="Password Input"
              placeholder="Enter your password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              variant="outlined"
              size="md"
              passwordToggle
              clearable
            />

            {/* Filled Variant */}
            <InputField
              label="Filled Variant"
              placeholder="Filled variant"
              helperText="Looks great with a background."
              value={filledInput}
              onChange={(e) => setFilledInput(e.target.value)}
              variant="filled"
              size="md"
            />

            {/* Ghost Variant */}
            <InputField
              label="Ghost Variant"
              placeholder="Ghost variant"
              helperText="Minimal styling."
              value={ghostInput}
              onChange={(e) => setGhostInput(e.target.value)}
              variant="ghost"
              size="md"
            />

            {/* Small Size */}
            <InputField
              label="Small Size"
              placeholder="Small size"
              value={smallInput}
              onChange={(e) => setSmallInput(e.target.value)}
              variant="outlined"
              size="sm"
            />

            {/* Large Size */}
            <InputField
              label="Large Size"
              placeholder="Large size"
              value={largeInput}
              onChange={(e) => setLargeInput(e.target.value)}
              variant="outlined"
              size="lg"
            />
          </div>
        </div>

        {/* DataTable Section */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 border-b pb-3 text-gray-900 dark:text-white">DataTable Component</h2>
          <div className="flex space-x-3 mb-6">
            <button
              onClick={handleLoadData}
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Load Data
            </button>
            <button
              onClick={handleClearData}
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Clear Data
            </button>
            <button
              onClick={() => setIsTableLoading(true)}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Show Loading
            </button>
          </div>
          <DataTable
            data={tableData}
            columns={columns}
            selectable
            onRowSelect={(selected) => console.log('Selected rows:', selected)}
            loading={isTableLoading}
          />
        </div>
      </div>
    </div>
  );
}
