import { EditorConfig, ParsingRule } from '../types';

export const parseInput = (config: EditorConfig, input: string): string => {
    const { rules } = config;

    let output = rules.reduce((acc, rule) => parseForRule(rule, acc), input);

    output = removeDoubleSpaces(output);
    output = output.trimStart();
    return output;
};

const parseForRule = (rule: ParsingRule, output: string): string => {
    const { replace, triggerPrefix, triggerSuffix, wrapperRequireSpaces } = rule;

    const regexp = new RegExp(`${triggerPrefix}([a-zA-Z0-9_]+)${triggerSuffix}${wrapperRequireSpaces ? '\\s' : ''}`, 'g');
    return output.replace(regexp, (fullMatch: string, content: string) => replace(fullMatch.trimEnd(), content));
};

const removeDoubleSpaces = (input: string): string => input.replace(/\s{2,}/g, ' ');
