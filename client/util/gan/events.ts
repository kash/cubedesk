export default class EventStream<T> {
	private listeners = new Set<(event: T) => void>();

	subscribe(listener: (event: T) => void): () => void {
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	}

	emit(event: T) {
		for (const listener of [...this.listeners]) {
			listener(event);
		}
	}

	clear() {
		this.listeners.clear();
	}
}
