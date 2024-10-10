import { SyntheticEvent } from 'react';
import { RenderCounter } from './RenderCounter';
import { clearElementSelection, createRangeHolder, restoreRange, saveRange, selectAllElement, selectInElement } from './selectionUtils';

export const App = () => {
    return (
        <div>
            <h2>Climax</h2>

            <RenderCounter />

            <div contentEditable spellCheck={false} id="plain-text" className="climax-editor" onSelect={focusHandler} onBlur={focusHandler}>
                {defaultText}
            </div>

            <button onClick={clearElementSelectionHandler('plain-text')}>Clear selection</button>
            <button onClick={selectAllElementHandler('plain-text')}>Select all</button>
            <button onClick={selectInElementHandler('plain-text')}>Simple selection</button>
            <button onClick={saveRangeHandler}>Save selection</button>
            <button onClick={restoreRangeHandler}>Restore selection</button>

            <pre className="climax-logger"></pre>
        </div>
    );
};

const getEditorElement = (elementId: string) => document.querySelector(`#${elementId}.climax-editor`);

const focusHandler = (event: SyntheticEvent): void => {
    const selection = window.getSelection();
    const log: Record<string, unknown> = {};

    if (!selection || event.type === 'blur') {
        printLog(log);
        return;
    }

    const range = selection.getRangeAt(0);

    log.startContainer = range.startContainer.nodeName;
    log.startOffset = range.startOffset;
    log.endContainer = range.endContainer.nodeName;
    log.endOffset = range.endOffset;

    printLog(log);
};
const printLog = (log: Record<string, unknown>): void => {
    document.getElementsByClassName('climax-logger')[0].textContent = `Current selection: ${JSON.stringify(log, null, 3)}`;
};

const clearElementSelectionHandler = (elementId: string) => () => {
    clearElementSelection(getEditorElement(elementId));
};

const selectAllElementHandler = (elementId: string) => () => {
    selectAllElement(getEditorElement(elementId));
};

const selectInElementHandler = (elementId: string) => () => {
    selectInElement(getEditorElement(elementId), 5, 11);
};

const rangeHolder = createRangeHolder();

const saveRangeHandler = () => {
    saveRange(rangeHolder);
};

const restoreRangeHandler = () => {
    restoreRange(rangeHolder);
};

const defaultText = ` The climax or turning point of a narrative work is its point of highest tension and drama ::a `;
