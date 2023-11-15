import { mealData, menuData } from '../../pages/MenuPage';
import MealItem from './mealItem';
const MenuList = (props: { items: menuData }) => {
	const Meals: Array<mealData> = [];

	for (const meal in props.items) {
		Meals.push(props.items[meal as keyof menuData]);
	}
	return (
		<>
			{Meals.map((items) => {
				return <MealItem key={items.name} item={items} />;
			})}
		</>
	);
};
export default MenuList;
