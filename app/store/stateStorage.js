"use client";
/* const stateStorage = {
	// Get the state from the storage
	get: (key) => {
		if (typeof window !== "undefined") {
			const value = window.localStorage.getItem(key);
			if (value) return JSON.parse(value);
		}
		return null;
	},
	// Set the state in the storage
	set: (key, value) => {
		if (typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(value));
	},
	// Remove the state from the storage
	remove: (key) => {
		window.localStorage.removeItem(key);
	},
}; */
// change stateStorage a type class
class StateStorage {
	static #key = "cart-storage"; // private field

	static get() {
		if (typeof window !== "undefined") {
			const value = window.localStorage.getItem(this.#key);
			if (value) return JSON.parse(value);
		}
		return null;
	}

	static set(value) {
		if (typeof window !== "undefined") window.localStorage.setItem(this.#key, JSON.stringify(value));
	}

	static delete(index) {
		const {state} = this.get();
		if (state && state.cart) {
			state.cart.splice(index, 1);
			this.set(state);
		}
	}

	static update(product) {
		const {state} = this.get() || {cart: []};
		const index = state.cart.findIndex((item) => item.id === product.id);

		if (index !== -1) {
			// Actualiza el producto existente
			state.cart[index] = {...product};
		} else {
			// Añade el nuevo producto
			state.cart.push(product);
		}
		this.set(state); // Guarda el estado actualizado
	}

	static remove() {
		window.localStorage.removeItem(this.#key);
	}
}

export default StateStorage;
