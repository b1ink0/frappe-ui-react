import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700"
  />
);
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
  />
);
const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label {...props} className="text-sm font-medium leading-none" />
);

const meta: Meta<typeof SheetContent> = {
  title: 'Components/Sheet',
  component: SheetContent,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Which side the sheet appears from.',
    },
  },
  parameters: {
    component: null,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default (Right Side)',
  args: {
    side: 'right',
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side={args.side}>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@johndoe" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};


export const LeftSide: Story = {
  ...Default,
  name: 'From Left',
  args: {
    side: 'left',
  },
};

export const TopSide: Story = {
  ...Default,
  name: 'From Top',
  args: {
    side: 'top',
  },
};

export const BottomSide: Story = {
  ...Default,
  name: 'From Bottom',
  args: {
    side: 'bottom',
  },
};