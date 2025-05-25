import {setup} from 'bem-cn';

export const blockNamespace = 'cd';

const block = setup({
	ns: `${blockNamespace}-`,
	mod: '--',
	modValue: '-',
});

export default block;
