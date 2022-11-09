import { ComponentStory, ComponentMeta } from '@storybook/react';
import GuideDemoCard, { IGuideDemoCard } from './GuideDemoCard';
import { mockGuideDemoCardProps } from './GuideDemoCard.mocks';

export default {
    title: 'cards/base/GuideDemoCard',
    component: GuideDemoCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof GuideDemoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GuideDemoCard> = (args) => (
    <GuideDemoCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockGuideDemoCardProps.base,
} as IGuideDemoCard;
