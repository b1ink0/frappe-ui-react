// src/components/Autocomplete/Autocomplete.stories.tsx
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './autoComplete'; // Adjust the import path

const options = [
  {
    label: 'John Doe',
    value: 'john-doe',
    image: 'https://randomuser.me/api/portraits/men/59.jpg',
  },
  {
    label: 'Jane Doe',
    value: 'jane-doe',
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    label: 'John Smith',
    value: 'john-smith',
    image: 'https://randomuser.me/api/portraits/men/59.jpg',
  },
  {
    label: 'Jane Smith',
    value: 'jane-smith',
    image: 'https://randomuser.me/api/portraits/women/59.jpg',
  },
  {
    label: 'John Wayne',
    value: 'john-wayne',
    image: 'https://randomuser.me/api/portraits/men/57.jpg',
  },
  {
    label: 'Jane Wayne',
    value: 'jane-wayne',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
]

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'object', description: 'The currently selected value(s).' },
    options: { control: 'object', description: 'Array of options to display.' },
    multiple: { control: 'boolean', description: 'Allow multiple selections.' },
    label: { control: 'text', description: 'Label for the autocomplete input.' },
    placeholder: { control: 'text', description: 'Placeholder text for the input.' },
    loading: { control: 'boolean', description: 'Show loading indicator.' },
    hideSearch: { control: 'boolean', description: 'Hide the search input in the dropdown.' },
    showFooter: { control: 'boolean', description: 'Show the default footer (Clear/Select All).' },
    maxOptions: { control: 'number', description: 'Maximum number of options to display.' },
    compareFn: { control: false, description: 'Function to compare option values (for objects).' },
    placement: { control: 'select', options: ['bottom-start', 'bottom', 'top-end'], description: 'Placement of the dropdown.' },
    bodyClasses: { control: 'text', description: 'CSS classes for the popover body.' },
    onChange: { action: 'update:modelValue', description: 'Event when selection changes.' },
    children: { control: false }, // Children are handled via render functions/slots
  },
  args: {
    multiple: false,
    label: 'Select an Option',
    placeholder: 'Start typing to search...',
    loading: false,
    hideSearch: false,
    showFooter: false,
    maxOptions: 50,
    placement: 'bottom-start',
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;


export const SingleSelect_SimpleOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <Autocomplete
        {...args}
        modelValue={value}
        onChange={setValue}
        options={options}
      />
    );
  },
  args: {
    options: options,
  },
};

export const SingleSelect_ObjectOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <Autocomplete
        {...args}
        modelValue={value}
        onChange={setValue}
        options={options}
        compareFn={(a, b) => a?.value === b?.value}
      />
    );
  },
  args: {
    options: options,
    label: 'Select a Product',
  },
};

export const MultiSelect_ObjectOptions: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([]);
    return (
      <Autocomplete
        {...args}
        modelValue={values}
        onChange={setValues}
        options={options}
        multiple
        compareFn={(a, b) => a?.value === b?.value}
      />
    );
  },
  args: {
    options: options,
    label: 'Select Products (Multi)',
    placeholder: 'Add products...',
    showFooter: true,
  },
};

export const GroupedOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <Autocomplete
        {...args}
        modelValue={value}
        onChange={setValue}
        options={options}
      />
    );
  },
  args: {
    options: options,
    label: 'Select Food Item',
  },
};