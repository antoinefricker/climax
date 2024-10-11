import { within, expect } from '@storybook/test';
import { ClimaxStory, climaxMeta } from './climaxStoriesConfig';

const emptyClimaxMeta = { ...climaxMeta };
export default emptyClimaxMeta;

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
