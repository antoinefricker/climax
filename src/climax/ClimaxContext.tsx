import { type ReactNode, useRef, useState } from 'react';
import { ClimaxContext } from './useClimaxContext';

export const ClimaxContextProvider = ({
    children,
    initCliInput = '',
    initCaretPosition = -1,
}: ClimaxContextProviderParams) => {
    const cliEditorRef = useRef<HTMLDivElement>(null);
    const [caretPosition, setCaretPosition] = useState<number>(initCaretPosition);
    const [cliInput, setCliInput] = useState<string>(initCliInput);

    return (
        <ClimaxContext.Provider
            value={{ cliEditorRef, caretPosition, setCaretPosition, cliInput, setCliInput }}
        >
            {children}
        </ClimaxContext.Provider>
    );
};

type ClimaxContextProviderParams = {
    children: ReactNode;
    initCliInput?: string;
    initCaretPosition?: number;
};
