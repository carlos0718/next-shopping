const PATH = "https://fakestoreapi.com";
const API_PRODUCTS = `${PATH}/products`;
const API_CATEGORIES = `${PATH}/products/categories`;
const API_PRODUCTS_BY_CATEGORY = `${PATH}/products/category/:category`;
const API_PRODUCT_BY_ID = `${PATH}/products/:id`;
const API_LOGIN = `${PATH}/auth/login`;

export const getProducts = async () => {
	try {
		const response = await fetch(API_PRODUCTS);
		const data = await response.json();
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(data);
			}, 1000);
		});
	} catch (error) {
		throw new Error(error);
	}
};

export const getCategories = async () => {
	try {
		const response = await fetch(API_CATEGORIES);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export const getProductsByCategory = async (category) => {
	try {
		const response = await fetch(API_PRODUCTS_BY_CATEGORY.replace(":category", category));
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export const getProductById = async (id) => {
	try {
		const response = await fetch(API_PRODUCT_BY_ID.replace(":id", id));
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};
