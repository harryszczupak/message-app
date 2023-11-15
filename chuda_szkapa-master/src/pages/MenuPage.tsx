import { useLoaderData } from 'react-router-dom';
import { json } from 'react-router-dom';
import MenuList from '../components/menu/menuList';
export type mealData = {
	name: string;
	price: number;
	url: string;
};
export type menuData = {
	m1: mealData;
	m2: mealData;
	m3: mealData;
};
const MenuPage = () => {
	const data = useLoaderData() as menuData;
	return <MenuList items={data}></MenuList>;
};
export default MenuPage;
export async function loader() {
	const response = await fetch(
		'https://chuda-szkapa-default-rtdb.firebaseio.com/meals.json'
	);
	if (!response.ok) {
		throw json({ message: 'failed to fetch' }, { status: 500 });
	}
	const data = await response.json();

	return data;
}
