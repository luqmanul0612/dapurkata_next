import React from "react";
import { Story, Meta } from "@storybook/react";
import Input from "./Input";
import { TInput } from "./Input.types";

export default {
  title: "COMPONENTS/Input",
  component: Input,
  argTypes: {
    label: "Input",
    onClick: { action: "Input Clicked!" },
  },
  args: {
    disabled: false,
    label: "Caption",
  },
} as Meta<typeof Input>;

const Template: Story<TInput> = (args) => <Input {...args} />;

export const StandardInput = Template.bind({});
StandardInput.args = {
  type: "text",
};
