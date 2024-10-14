export const nodeBelongsToEditor = (node?: Node | null, editor?: Element | null): boolean => {
    if (!node || !editor) {
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

export const rangeBelongsToNode = (range?: Range | null, node?: Element | null): boolean =>
    nodeBelongsToEditor(range?.startContainer, node) && nodeBelongsToEditor(range?.endContainer, node);
