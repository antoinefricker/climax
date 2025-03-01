import { userEvent, within, expect } from '@storybook/test';
import { ClimaxStory, climaxMeta } from './climaxStoriesConfig.ts';
import { defaultEditorConfig } from '../../defaultEditorConfig.ts';

const caretManagementClimaxMeta = { ...climaxMeta, title: 'climax/Format user input' };
export default caretManagementClimaxMeta;

export const KeepCaretAtGoodPosition: ClimaxStory = {
    args: {
        userInput: '',
        config: defaultEditorConfig,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.type(canvas.getByTestId('climax-editor'), 'hello ');

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerHTML).toEqual('hello ');
    },
};
