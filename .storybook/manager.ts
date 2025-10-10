import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle:
      '<span id="fur-title">frappe-ui-react</span> <span id="fur-version">(v1.0.0-beta.0)</span>', // update version as per package.json
    brandUrl: undefined, // disables link on the title
    brandImage: undefined,
  }),
});
