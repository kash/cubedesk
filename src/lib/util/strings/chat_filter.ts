import Filter from 'bad-words';

let filter = null;

export function initFilter() {
	if (filter) {
		return;
	}

	filter = new Filter();
}

export function cleanBadWords(msg: string) {
	initFilter();

	return filter.clean(msg);
}
