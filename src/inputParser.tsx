export const parseInput = (source: string): string => {
    findTrigger(source, '::').forEach((match) => {
        source = source.replace(match, `<span class="trigger">${match}</span>`);
    });
    return source;
};

const findTrigger = (raw: string | null | undefined, trigger: string): string[] => {
    if (!raw) {
        return [];
    }

    const matches = raw.match(new RegExp(`${trigger}\\w*`, 'g'));
    return matches || [];
};
