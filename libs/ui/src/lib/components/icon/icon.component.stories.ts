import {
  moduleMetadata,
  Story,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { IconComponent } from './icon.component';
import { mdiVirusOutline } from '@mdi/js';

export default {
  title: 'IconComponent',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 40vw; height: 40vh">${story}</div>`
    ),
  ],
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  component: IconComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  icon: mdiVirusOutline,
  color: 'red',
  size: '200',
};
