import { Button } from "@chakra-ui/react";

export default {
  title: "ChakraUI/Button",
  component: Button,
  argTypes: {
    colorScheme: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: "blue",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: "red",
  children: "Danger",
};
