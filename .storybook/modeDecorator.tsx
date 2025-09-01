import { useDarkMode } from "storybook-dark-mode";

const ModeDecorator = (Story) => {
  const mode = useDarkMode() ? "dark" : "light";

  return (
    <div className={mode}>
      <Story />
    </div>
  );
};

export default ModeDecorator;
