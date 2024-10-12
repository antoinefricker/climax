import { within, expect } from '@storybook/test';
import { ClimaxStory, climaxMeta } from './climaxStoriesConfig';

const initialValueClimaxMeta = { ...climaxMeta, title: 'climax/01. Initial value' };
export default initialValueClimaxMeta;

export const Empty: ClimaxStory = {
    args: {
        userInput: '',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor')).toBeInTheDocument();

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerHTML).toEqual('');
        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerText).toEqual('');
    },
};
export const PlainText: ClimaxStory = {
    args: {
        userInput: 'more about climax',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor')).toBeInTheDocument();

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerHTML).toEqual('more about climax');
        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerText).toEqual('more about climax');
    },
};
export const Preformatted: ClimaxStory = {
    args: {
        userInput: '<span class="trigger">::goi</span> search for <span class="trigger">::go</span> <span class="trigger">::gh</span> climax',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor')).toBeInTheDocument();

        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerHTML).toEqual(
            '<span class="trigger">::goi</span> search for <span class="trigger">::go</span> <span class="trigger">::gh</span> climax',
        );
        await expect(canvas.getByTestId<HTMLDivElement>('climax-editor').innerText).toEqual('::goi search for ::go ::gh climax');
    },
};
