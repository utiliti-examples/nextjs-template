import { ComponentStory, ComponentMeta } from '@storybook/react';
import SinglePageTemplate, { ISinglePageTemplate } from './SinglePageTemplate';
import { mockSinglePageTemplateProps } from './SinglePageTemplate.mocks';

export default {
    title: 'layouts/SinglePageTemplate',
    component: SinglePageTemplate,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof SinglePageTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SinglePageTemplate> = (args) => (
    <SinglePageTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockSinglePageTemplateProps.base,
} as ISinglePageTemplate;
