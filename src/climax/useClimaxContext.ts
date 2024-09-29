import { createContext, Dispatch, RefObject, SetStateAction, useContext } from 'react';

export const ClimaxContext = createContext<ClimaxContextData>(null);

export const useClimaxContext = () => {
    const context = useContext(ClimaxContext);
    if (context === null) {
        throw new Error('useClimaxContext must be used within a ClimaxContextProvider');
    }
    return context;
};

type ClimaxContextData = null | {
    cliEditorRef: null | RefObject<HTMLDivElement>;
    caretPosition: number;
    setCaretPosition: Dispatch<SetStateAction<number>>;
    cliInput: string;
    setCliInput: Dispatch<SetStateAction<string>>;
};
