import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import { context } from '../Context/card-contex-provider';
const ShopButton = (props: { amount: number }) => {
	const ctx = useContext(context);

	const setVisibilityHanlder = () => {
		ctx.setVisibility((prev: boolean) => !prev);
	};
	return (
		<button className={classes.shopButt} onClick={setVisibilityHanlder}>
			<section className={classes.section}>
				<h3>shop</h3>
				<span>{props.amount}</span>
			</section>
		</button>
	);
};
export default ShopButton;
