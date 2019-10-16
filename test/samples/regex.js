module.exports = [
	{
		description: 'disallows sticky flag in regex literals',
		input: `var regex = /x/y;`,
		error: /Transforming the regular expression sticky flag is not implemented/
	},

	{
		description: 'u flag is ignored with `transforms.unicodeRegExp === false`',
		options: { transforms: { unicodeRegExp: false } },
		input: `var regex = /x/u;`,
		output: `var regex = /x/u;`
	},

	{
		description: 'y flag is ignored with `transforms.stickyRegExp === false`',
		options: { transforms: { stickyRegExp: false } },
		input: `var regex = /x/y;`,
		output: `var regex = /x/y;`
	}
];
