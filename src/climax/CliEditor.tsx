import { useClimaxContext } from './useClimaxContext';

export const CliEditor = () => {
    const { cliEditorRef, cliInput } = useClimaxContext();

    return (
        <div
            className="cli-editor"
            contentEditable
            dangerouslySetInnerHTML={{ __html: cliInput }}
            ref={cliEditorRef}
        />
    );
};
