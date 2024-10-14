import { within, expect } from '@storybook/test';
import { ClimaxStory, climaxMeta } from './climaxStoriesConfig.ts';
import { defaultEditorConfig } from '../../defaultEditorConfig.ts';

const caretManagementClimaxMeta = { ...climaxMeta, title: 'climax/02. Caret management' };
export default caretManagementClimaxMeta;

export const PlainText: ClimaxStory = {
    args: {
        userInput: 'hello ',
        config: defaultEditorConfig,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor')).toBeInTheDocument();

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerHTML).toEqual('hello ');
    },
};
