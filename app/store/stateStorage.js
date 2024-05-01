"use client";
const stateStorage = {
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
};

export default stateStorage;
