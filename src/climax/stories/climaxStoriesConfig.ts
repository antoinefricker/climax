import { Climax } from '../Climax';
import type { Meta, StoryObj } from '@storybook/react';

export const climaxMeta = {
    title: 'core/Climax',
    component: Climax,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Climax>;

export type ClimaxStory = StoryObj<typeof climaxMeta>;
