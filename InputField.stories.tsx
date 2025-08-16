import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { InputField, InputFieldProps } from './InputField';

const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    clearable: { control: 'boolean' },
    passwordToggle: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<InputFieldProps>;

// --------------------
// Default Input
// --------------------
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Default Input',
    placeholder: 'Enter text...',
    helperText: 'Standard input field',
    variant: 'outlined',
    size: 'md',
  },
};

// --------------------
// Invalid Input
// --------------------
export const Invalid: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Invalid Input',
    placeholder: 'Invalid input',
    invalid: true,
    errorMessage: 'This field is required.',
    variant: 'outlined',
    size: 'md',
  },
};

// --------------------
// Clearable Input
// --------------------
export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Clearable Input',
    placeholder: 'Type something...',
    clearable: true,
    variant: 'outlined',
    size: 'md',
  },
};

// --------------------
// Password Input
// --------------------
export const Password: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Password Input',
    placeholder: 'Enter your password',
    passwordToggle: true,
    variant: 'outlined',
    size: 'md',
  },
};

// --------------------
// Variant Stories
// --------------------
export const Outlined: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Outlined Input',
    placeholder: 'Outlined variant',
    variant: 'outlined',
    size: 'md',
  },
};

export const Filled: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Filled Input',
    placeholder: 'Filled variant',
    variant: 'filled',
    size: 'md',
  },
};

export const Ghost: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Ghost Input',
    placeholder: 'Ghost variant',
    variant: 'ghost',
    size: 'md',
  },
};

// --------------------
// Size Stories
// --------------------
export const Small: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    variant: 'outlined',
    size: 'sm',
  },
};

export const Medium: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size',
    variant: 'outlined',
    size: 'md',
  },
};

export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    variant: 'outlined',
    size: 'lg',
  },
};
