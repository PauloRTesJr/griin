import {
  moduleMetadata,
  Story,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 40vw">${story}</div>`
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta<InputComponent>;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Nome do produto',
  color: '#DA291C',
};
