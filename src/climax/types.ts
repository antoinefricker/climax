export type EditorConfig = {
    rules: ParsingRule[];
};

export type ParsingRule = {
    label?: string;
    replace: (match: string, code: string) => string;
    triggerPrefix: string;
    triggerSuffix: string;
    wrapperRequireSpaces: boolean;
    options?: ParsingRuleOption[];
};

export type ParsingRuleOption = { code: string } & Record<string, unknown>;
