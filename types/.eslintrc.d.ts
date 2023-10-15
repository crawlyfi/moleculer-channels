export declare namespace env {
    const node: boolean;
    const commonjs: boolean;
    const es6: boolean;
    const jquery: boolean;
    const jest: boolean;
    const jasmine: boolean;
}
declare const _extends: string[];
export { _extends as extends };
export declare namespace parserOptions {
    const sourceType: string;
    const ecmaVersion: number;
}
export declare const plugins: string[];
export declare const rules: {
    "no-var": string[];
    "no-console": string[];
    "no-unused-vars": string[];
    "no-trailing-spaces": string[];
    "security/detect-object-injection": string[];
    "security/detect-non-literal-require": string[];
    "security/detect-non-literal-fs-filename": string[];
    "no-process-exit": string[];
    "node/no-unpublished-require": number;
    "require-atomic-updates": number;
    "object-curly-spacing": string[];
};
