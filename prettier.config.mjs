const config = {
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    quoteProps: "consistent",
    bracketSpacing: true,
    endOfLine: "auto",
    singleQuote: false,
    htmlWhitespaceSensitivity: "strict",
    bracketSameLine: true,
    singleAttributePerLine: true,
    plugins: ["prettier-plugin-go-template"],

    overrides: [
        {
            files: ["*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ["*.html"],
            options: {
                parser: "go-template",
            },
        },
    ],
};

export default config;
