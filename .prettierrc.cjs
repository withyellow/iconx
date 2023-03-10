module.exports = {
	plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'always',
	requirePragma: false,
	proseWrap: 'preserve',
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'auto',
	importOrderParserPlugins: ['classProperties', 'typescript', 'jsx'],
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@tarojs/(.*)$',
		'^@components/(.*)$',
		'^@hooks/(.*)$',
		'^@service/(.*)$',
		'^@store/(.*)$',
		'^@utils/(.*)$',
		'^@api/(.*)$',
		'^@pages/(.*)$',
		'^@types/(.*)$',
		'^./index.module.less',
		'^[./]',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	overrides: [
		{
			files: ['*.json5'],
			options: {
				singleQuote: false,
				quoteProps: 'preserve',
			},
		},
		{
			files: ['*.yml'],
			options: {
				singleQuote: false,
			},
		},
	],
};
