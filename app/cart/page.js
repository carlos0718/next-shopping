"use client";
import {useStateStore} from "../../store/useStore";

const Cart = () => {
	const {cart} = useStateStore();
	console.log(cart);
	return (
		<div>
			{cart.map((item) => (
				<div key={item.id}>
					<p>{item.title}</p>
					<p>{item.price}</p>
				</div>
			))}
		</div>
	);
};

export default Cart;
