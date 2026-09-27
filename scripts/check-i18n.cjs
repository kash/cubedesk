const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const catalogRoot = path.join(root, 'client/i18n/messages');
const locales = ['en', 'es'];
const errors = [];

function sourceFile(file) {
	return ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
}

function visit(node, callback) {
	callback(node);
	ts.forEachChild(node, (child) => visit(child, callback));
}

function walk(directory) {
	return fs.readdirSync(directory, {withFileTypes: true}).flatMap((item) => {
		const file = path.join(directory, item.name);
		return item.isDirectory() ? walk(file) : [file];
	});
}

function readCatalog(locale) {
	const messages = new Map();
	for (const file of walk(path.join(catalogRoot, locale)).filter((file) =>
		file.endsWith('.ts'),
	)) {
		visit(sourceFile(file), (node) => {
			if (!ts.isPropertyAssignment(node) || !ts.isStringLiteral(node.name)) return;
			if (!ts.isStringLiteral(node.initializer)) return;
			const key = node.name.text;
			if (messages.has(key)) errors.push(`${locale}: duplicate key ${key}`);
			messages.set(key, node.initializer.text);
		});
	}
	return messages;
}

const catalog = Object.fromEntries(locales.map((locale) => [locale, readCatalog(locale)]));
const allKeys = new Set(locales.flatMap((locale) => [...catalog[locale].keys()]));
const referenced = new Set();
const domains = new Set([...allKeys].map((key) => key.split('.')[0]));

for (const file of [...walk(path.join(root, 'client')), ...walk(path.join(root, 'shared'))]) {
	if (!/\.[jt]sx?$/.test(file) || file.startsWith(catalogRoot) || file.includes('.test.'))
		continue;
	const source = sourceFile(file);
	visit(source, (node) => {
		if (ts.isStringLiteral(node)) {
			referenced.add(node.text);
			// Include semantic keys kept in data tables and passed to t at runtime.
			if (
				/^[A-Za-z][\w-]*(?:\.[A-Za-z][\w-]*)+$/.test(node.text) &&
				domains.has(node.text.split('.')[0])
			) {
				if (
					!allKeys.has(node.text) &&
					!allKeys.has(`${node.text}_one`) &&
					!allKeys.has(`${node.text}_other`)
				) {
					const line =
						source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1;
					errors.push(
						`${path.relative(root, file)}:${line}: missing dynamic key ${node.text}`,
					);
				}
			}
		}
		if (!ts.isCallExpression(node) || node.expression.getText(source) !== 't') return;
		const key = node.arguments[0];
		if (!key || !ts.isStringLiteral(key)) return;
		if (allKeys.has(key.text)) return;
		if (
			locales.every(
				(locale) =>
					catalog[locale].has(`${key.text}_one`) &&
					catalog[locale].has(`${key.text}_other`),
			)
		)
			return;
		const line = source.getLineAndCharacterOfPosition(key.getStart(source)).line + 1;
		errors.push(`${path.relative(root, file)}:${line}: missing key ${key.text}`);
	});
}

function variables(value) {
	return [...value.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)]
		.map((match) => match[1])
		.sort()
		.join(',');
}

for (const key of allKeys) {
	for (const locale of locales) {
		if (!catalog[locale].has(key)) errors.push(`${locale}: missing key ${key}`);
	}
	if (locales.every((locale) => catalog[locale].has(key))) {
		if (variables(catalog.en.get(key)) !== variables(catalog.es.get(key))) {
			errors.push(`${key}: interpolation variables differ`);
		}
	}
}

for (const key of allKeys) {
	const plural = key.match(/^(.+)_(one|other)$/);
	if (!plural) continue;
	for (const locale of locales) {
		if (
			!catalog[locale].has(`${plural[1]}_one`) ||
			!catalog[locale].has(`${plural[1]}_other`)
		) {
			errors.push(`${locale}: incomplete plural ${plural[1]}`);
		}
	}
}

const unused = [...allKeys].filter((key) => {
	const pluralBase = key.replace(/_(one|other)$/, '');
	return !referenced.has(key) && !referenced.has(pluralBase);
});
for (const key of unused) errors.push(`unused key ${key}`);

if (errors.length) {
	console.error(errors.join('\n'));
	process.exitCode = 1;
} else {
	console.log(`Checked ${allKeys.size} keys across ${locales.join(', ')}.`);
}
