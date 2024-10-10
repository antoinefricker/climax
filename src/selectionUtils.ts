const nodeBelongsToEditor = (node: Node, editor: Element | null): boolean => {
    if (!editor) {
        return false;
    }

    let pointer: Node | null = node;
    while (pointer) {
        if (pointer === editor) {
            return true;
        }
        pointer = pointer.parentNode;
    }
    return false;
};

export const clearElementSelection = (element: Element | null): boolean => {
    const selection = window.getSelection();
    if (!element || !selection) {
        return false;
    }

    let clearedRange = 0;
    for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        const startBelongsToEditor = nodeBelongsToEditor(range.startContainer, element);
        const endBelongsToEditor = nodeBelongsToEditor(range.endContainer, element);
        if (startBelongsToEditor && endBelongsToEditor) {
            selection.removeRange(range);
            clearedRange++;
        }
    }
    return clearedRange > 0;
};

export const selectAllElement = (element: Element | null): boolean => {
    const selection = window.getSelection();
    if (!element || !selection) {
        return false;
    }

    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
};

export const selectInElement = (element: Element | null, start: number, end: number): boolean => {
    const selection = window.getSelection();
    const firstNode = element?.firstChild;
    if (!firstNode || !selection) {
        console.log('selectInElement error');
        return false;
    }

    selection.removeAllRanges();

    const range = document.createRange();
    range.setStart(firstNode, start);
    range.setEnd(firstNode, end);
    selection.addRange(range);
    return true;
};

export type RangeHolder = {
    range: Range | null;
};

export const createRangeHolder = (): RangeHolder => {
    return {
        range: null,
    };
};

export const saveRange = (rangeHolder: RangeHolder) => {
    const selection = window.getSelection();
    if (!selection) {
        return;
    }
    rangeHolder.range = selection.getRangeAt(0);
};

export const restoreRange = (rangeHolder: RangeHolder) => {
    const selection = window.getSelection();
    if (!rangeHolder.range || !selection) {
        return;
    }
    selection.removeAllRanges();
    selection.addRange(rangeHolder.range);
};
