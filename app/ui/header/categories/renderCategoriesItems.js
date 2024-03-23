import Button from "@mui/material/Button";
import {getCategories} from "@/app/lib/api";

const RenderCategoriesItems = async ({closeMenu}) => {
	const categories = await getCategories();
	return categories.map((page) => (
		<Button key={page} onClick={closeMenu} sx={{my: 2, color: "white", display: "block"}}>
			{page}
		</Button>
	));
};

export default RenderCategoriesItems;

const RenderCategoriasItemsResponsive = {

};

export RenderCategoriasItemsResponsive;