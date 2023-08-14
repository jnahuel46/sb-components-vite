import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args:{
    label: 'Basic Label',
    size: "normal"
  }
};

export const AllCaps: Story = {
  args:{
    label: 'Basic Label',
    size: "h1",
    allCaps: true
  }
};

export const Secondary: Story = {
  args:{
    label: 'Basic Label',
    size: "normal",
    color: 'text-tertiary'
  }
};

export const CustomColor: Story = {
  args:{
    label: 'Custom Color Label',
    size: "h2",
    fontColor: '#55166'
  }
};
