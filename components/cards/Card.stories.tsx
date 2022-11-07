import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card, { ICard } from './Card';
import { mockCardProps } from './Card.mocks';

export default {
    title: 'components/Card',
    component: Card,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockCardProps.base,
} as ICard;
