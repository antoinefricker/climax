import { EditorConfig } from './climax/types';

export const defaultEditorConfig: EditorConfig = {
    rules: [
        {
            label: 'sites',
            triggerPrefix: '::',
            triggerSuffix: '',
            wrapperRequireSpaces: true,
            replace: (match, _code) => wrapWithSpaces(`<span class="trigger">${match}</span>`),
            options: [
                {
                    code: 'go',
                    url: 'https://www.google.com',
                },
                {
                    code: 'wk',
                    url: 'https://www.youtube.com',
                },
                {
                    code: 'gh',
                    url: 'https://www.github.com',
                },
            ],
        },
    ],
};

const wrapWithSpaces = (content: string): string => ` ${content} `;
