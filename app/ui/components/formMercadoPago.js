"use client";
import React from "react";
import {initMercadoPago, Wallet} from "@mercadopago/sdk-react";
import {fetchPreferences} from "@/app/lib/api";
import {useStateStore} from "@/app/store/useCartStore";

initMercadoPago(process.env.NEXT_PUBLIC_KEY_MP, {locale: "es-AR", siteId: "MLA"});
const FormMercadoPagoPayment = () => {
	const {cart} = useStateStore();
	console.log("FormMercadoPagoPayment_::", cart);
	const items = [
		{
			id: "Sound system",
			title: "Dummy Title",
			description: "Dummy description",
			picture_url: "http://www.myapp.com/myimage.jpg",
			category_id: "car_electronics",
			quantity: 1,
			currency_id: "ARS",
			unit_price: 10000,
		},
	];
	const onSubmit = () => {
		const items = cart.map((product) => ({
			id: product.id,
			title: product.title,
			description: product.title,
			category_id: product.category,
			quantity: product.quantity,
			currency_id: "ARS",
			unit_price: product.price,
		}));
		return fetchPreferences(items)
			.then((response) => response.id)
			.catch((error) => console.error("Error::", error));
	};
	return <Wallet onSubmit={() => onSubmit()} />;
};

export default FormMercadoPagoPayment;
