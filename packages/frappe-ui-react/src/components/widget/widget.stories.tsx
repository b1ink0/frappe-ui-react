import type { Meta, StoryObj } from "@storybook/react-vite";
import { WidgetContainer } from "./index";
import { WidgetDropArea } from "./widget";

import {title as quicklinksTitle , Widget as QuicklinksWidget} from "./widget-quicklinks"
import {title as greetingTitle , Widget as GreetingWidget} from "./widget-greet"

const WIDGETS = [
  { id: 1, title: quicklinksTitle, Widget: QuicklinksWidget },
  { id: 2, title: greetingTitle, Widget: GreetingWidget },
]

const meta: Meta<typeof WidgetContainer> = {
  title: "Components/Dashboard/Widget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof WidgetContainer>;

export const Default: Story = {
  args: {
    title: "Quick Links"
  },
  render: () => (
    <WidgetDropArea widgets={WIDGETS}/>
  ),
  argTypes: {
    title: { control: "text", description: "Title for the widget" },
  },
};
