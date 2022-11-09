import { ComponentStory, ComponentMeta } from '@storybook/react';
import GuideCard, { IGuideCard } from './GuideCard';
import { mockGuideCardProps } from './GuideCard.mocks';

export default {
    title: 'cards/GuideCard',
    component: GuideCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof GuideCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GuideCard> = (args) => (
    <GuideCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockGuideCardProps.base,
} as IGuideCard;
