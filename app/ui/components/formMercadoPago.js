"use client";
import React from "react";
import {initMercadoPago, Wallet} from "@mercadopago/sdk-react";
import {fetchPreferences} from "@/app/lib/api";
import {useStateStore} from "@/app/store/useCartStore";

initMercadoPago(process.env.NEXT_PUBLIC_KEY_MP, {locale: "es-AR", siteId: "MLA"});
const FormMercadoPagoPayment = () => {
	const {cart} = useStateStore();
	const [preferenceId, setPreferenceId] = React.useState(null);

	React.useEffect(() => {
		if (cart.length > 0) {
			const items = cart.map((product) => ({
				id: product.id.toString(),
				title: product.title,
				description: product.title,
				quantity: product.quantity,
				currency_id: "ARS",
				unit_price: product.price,
			}));

			fetchPreferences(items)
				.then((res) => {
					if (res.id) setPreferenceId(res.id);
				})
				.catch((err) => console.error("MP Error", err));
		}
	}, [cart]);

	if (!preferenceId) return null;
	return (
		<div style={{marginTop: "1rem"}}>
			<Wallet initialization={{preferenceId}} customization={{texts: {valueProp: "smart_option"}}} />
		</div>
	);
};

export default FormMercadoPagoPayment;
