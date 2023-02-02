import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

type ButtonProps = {
  /** Button children element */
  children: React.ReactNode;
  /** Show loading spinner and disable button */
  isLoading?: boolean;
  /** Button color variant */
  variants?: "primary" | "secondary";
  /** Disable the button and add not-allowed cursor */
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

const ButtonStory = {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export default ButtonStory;
export const PrimaryButton = () => (
  <Button className="bg-blue-600">Hello World!</Button>
);
export const SecondaryButton = () => (
  <Button className="bg-red-600">Hello World!</Button>
);
