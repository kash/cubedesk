import Filter from 'bad-words';

let filter: Filter | null = null;

function getFilter(): Filter {
	if (!filter) {
		filter = new Filter();
	}

	return filter;
}

export function cleanBadWords(msg: string) {
	return getFilter().clean(msg);
}
