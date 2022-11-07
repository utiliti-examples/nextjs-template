import { ComponentStory, ComponentMeta } from '@storybook/react';
import SidebarPageTemplate, {
    ISidebarPageTemplate,
} from './SidebarPageTemplate';
import { mockSidebarPageTemplateProps } from './SidebarPageTemplate.mocks';

export default {
    title: 'layouts/SidebarPageTemplate',
    component: SidebarPageTemplate,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof SidebarPageTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarPageTemplate> = (args) => (
    <SidebarPageTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockSidebarPageTemplateProps.base,
} as ISidebarPageTemplate;
