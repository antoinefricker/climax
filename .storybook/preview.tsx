import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
    decorators: [
        (Story) => (
            <div
                style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    position: 'relative',
                    backgroundColor: '#a6afaa',
                    padding: '1rem',
                    width: '100%',
                    minHeight: '300px',
                }}
            >
                <Story />
            </div>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
