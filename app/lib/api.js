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
		return data;
	} catch (error) {
		throw new Error(error);
	}
};
