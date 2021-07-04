import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Hamburguer',
  backgroundColor: '#DA291C',
  color: '#FFFFFF',
};
