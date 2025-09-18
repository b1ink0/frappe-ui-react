import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'frappe-ui-react',
    brandUrl: undefined, // disables link on the title
    brandImage: undefined
  }),
});