import classes from './MainNavigation.module.css';
import burger from '../assets/Burger-45.png';
import NavBar from './NavBar';
import { useContext } from 'react';
import { context } from '../Context/card-contex-provider';
import Backdrop from '../../UI/Backdrop';
import { createPortal } from 'react-dom';
const MainNavigation = (props: { amount: number }) => {
	const ctx = useContext(context);
	console.log(ctx.isVisible);

	return (
		<header className={classes.header}>
			<nav>
				<div className={classes.leftNav}>
					<img src={burger}></img>
				</div>
				<NavBar amount={props.amount} />
			</nav>
			{ctx.isVisible
				? createPortal(<Backdrop />, document.getElementById('backdrop')!)
				: null}
		</header>
	);
};
export default MainNavigation;
