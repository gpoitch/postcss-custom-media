import babel from 'rollup-plugin-babel';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeGlobals from 'rollup-plugin-node-globals';

export default {
	input: 'codepen.js',
	output: [
		{ file: 'codepen.bundle.js', format: 'cjs', sourcemap: 'inline' }
	],
	plugins: [
		nodeGlobals(),
		nodeBuiltins(),
		babel({
			runtimeHelpers: false,
			externalHelpers: false,
			plugins: [
				'@babel/syntax-dynamic-import',
				'@babel/transform-arrow-functions',
				'@babel/transform-block-scoping',
				'@babel/transform-spread'
			],
			presets: [
				[
					'@babel/preset-env'
				]
			]
		})
	]
};