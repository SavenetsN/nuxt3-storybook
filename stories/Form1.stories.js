import { within, userEvent } from '@storybook/testing-library';
import ImpactForm1 from './Form1.vue';

export default {
  title: 'Components/Form1',
  component: ImpactForm1,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn = {
  render: () => ({
    components: {
      ImpactForm1,
    },
    template: '<impact-form1 />',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
