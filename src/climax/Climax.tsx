import { CliEditor } from './CliEditor';
import { ClimaxContextProvider } from './ClimaxContext';

export const Climax = () => {
    return (
        <ClimaxContextProvider initCliInput="test">
            <CliEditor />
        </ClimaxContextProvider>
    );
};
