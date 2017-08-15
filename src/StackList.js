import { LinkedList } from './LinkedList';

export class StackList {
	constructor() {
		this.list = new LinkedList();
	}

	get length() {
		return this.list.length;
	}

	push(item) {
		this.list.addItem(item);
	}

	pop(item) {
		let popElement = this.list.getLastItem();
		this.list.removeLastItem();
		return popElement;
	}

	isEmpty() {
		return this.list.length == 0;
	}

	map(callback) {
		this.list.map(callback);
	}

	toArray() {
		return this.list.toArray();
	}
}