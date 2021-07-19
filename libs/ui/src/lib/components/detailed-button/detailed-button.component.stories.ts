import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DetailedButtonComponent } from './detailed-button.component';

export default {
  title: 'DetailedButtonComponent',
  component: DetailedButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta<DetailedButtonComponent>;

const Template: Story<DetailedButtonComponent> = (
  args: DetailedButtonComponent
) => ({
  component: DetailedButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  // text: 'Hamburguer',
  // backgroundColor: '#DA291C',
  // color: '#FFFFFF',
};
