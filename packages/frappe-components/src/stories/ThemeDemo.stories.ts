import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeDemo } from '../components/ThemeDemo';

const meta = {
  title: 'Theme/ThemeDemo',
  component: ThemeDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof ThemeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Frappe Components Theme',
  },
};

export const ColorPalette: Story = {
  args: {
    title: 'Color Palette',
  },
};
