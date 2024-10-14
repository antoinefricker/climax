import { EditorConfig, ParsingRule } from '../types';

export const parseInput = (config: EditorConfig, input: string): string => {
    const { rules } = config;

    let output = input;
    console.log({ rules });
    rules.forEach((rule) => {
        output = parseForRule(rule, output);
    });

    console.log('before', output);
    output = removeDoubleSpaces(output);
    console.log('middle', output);
    output = output.trim();
    console.log('after', output);
    return output;
};

const parseForRule = (rule: ParsingRule, output: string): string => {
    const { replace, triggerPrefix, triggerSuffix, wrapperRequireSpaces } = rule;

    const regexp = new RegExp(`${triggerPrefix}([a-zA-Z0-9_]+)${triggerSuffix}${wrapperRequireSpaces ? '\\s' : ''}`, 'g');
    const matches = Array.from(output.matchAll(regexp));

    if (!matches?.length) {
        return output;
    }
    return output.replace(regexp, (fullMatch: string, content: string) => replace(fullMatch.trimEnd(), content));
};

const removeDoubleSpaces = (input: string): string => input.replace(/\s{2,}/g, ' ');
