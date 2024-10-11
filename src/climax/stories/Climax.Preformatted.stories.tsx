import { within, expect } from '@storybook/test';
import { ClimaxStory, climaxMeta } from './climaxStoriesConfig';

const emptyClimaxMeta = { ...climaxMeta };
export default emptyClimaxMeta;

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
