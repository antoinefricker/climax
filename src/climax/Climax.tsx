import { useCallback, useEffect, useRef } from 'react';

import { EditorConfig } from './types';
import './Climax.css';
import { parseInput } from './services/parseInput';
import { rangeBelongsToNode } from './services/selectionUtils';

export const Climax = ({ userInput = '', config }: ClimaxProps) => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!editorRef.current) {
            return;
        }
        editorRef.current.innerHTML = parseInput(config, userInput);
    }, [config, editorRef, userInput]);

    const changeHandler = useCallback(() => {
        if (!editorRef.current) {
            return;
        }

        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);

        if (!rangeBelongsToNode(range, editorRef.current)) {
            return;
        }

        const input = editorRef.current.innerText;
        editorRef.current.innerHTML = parseInput(config, input, range);
    }, [editorRef]);

    if (!config) {
        return <p>Editor configuration is missing</p>;
    }

    return (
        <div
            className="climax-editor"
            contentEditable
            data-testid="climax-editor"
            spellCheck={false}
            suppressContentEditableWarning={true}
            onInput={changeHandler}
            ref={editorRef}
        />
    );
};

type ClimaxProps = {
    config: EditorConfig;
    userInput?: string;
};
