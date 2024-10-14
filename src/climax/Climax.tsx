import { useEffect, useRef } from 'react';

import { EditorConfig } from './types';
import './Climax.css';
import { parseInput } from './services/parseInput';

export const Climax = ({ userInput = '', config }: ClimaxProps) => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!editorRef.current) {
            return;
        }
        editorRef.current.innerHTML = parseInput(config, userInput);
    }, [config, editorRef, userInput]);

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
            ref={editorRef}
        />
    );
};

type ClimaxProps = {
    config: EditorConfig;
    userInput?: string;
};
