import { writable } from 'svelte/store';

function watcher(initialValue: any, watchFunction: (oldValue: any, value: any) => void) {
	const { subscribe, update } = writable(initialValue);
	return {
		subscribe,
		set: (value: any) => {
			update((oldvalue) => {
				watchFunction(oldvalue, value);
				return value;
			});
		}
	};
}

export default watcher;
