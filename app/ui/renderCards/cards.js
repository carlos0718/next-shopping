"use client";
import React, {useState, useEffect} from "react";
import {getProducts} from "@/app/lib/api";
import CardTempate from "./cardTemplate";

const Cards = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			const data = await getProducts();
			setProducts(data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return products.map((p) => {
		return <CardTempate key={p.id} products={p} />;
	});
};

export default Cards;
