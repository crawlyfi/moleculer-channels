export const useTabs: boolean;
export const printWidth: number;
export const trailingComma: string;
export const tabWidth: number;
export const singleQuote: boolean;
export const semi: boolean;
export const bracketSpacing: boolean;
export const arrowParens: string;
export const overrides: ({
    files: string;
    options: {
        useTabs: boolean;
        tabWidth?: undefined;
    };
} | {
    files: string;
    options: {
        tabWidth: number;
        useTabs: boolean;
    };
})[];
