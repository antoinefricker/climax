import { useCallback, useEffect, useRef } from 'react';

import './Climax.css';

export const Climax = ({ userInput = '' }: ClimaxProps) => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    const inputHandler = useCallback(() => {
        if (!editorRef.current) {
            return;
        }
    }, [editorRef]);

    useEffect(() => {
        if (!editorRef.current) {
            return;
        }
        editorRef.current.innerHTML = userInput;
    }, [editorRef, userInput]);

    return (
        <div
            ref={editorRef}
            data-testid="climax-editor"
            className="climax-editor"
            contentEditable
            spellCheck={false}
            onInput={inputHandler}
            suppressContentEditableWarning={true}
        />
    );
};

type ClimaxProps = {
    userInput?: string;
};
