import ShopButton from './ShopButton';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const NavBar = (props: { amount: number }) => {
	return (
		<div className={classes.rightNav}>
			<ul>
				<NavLink
					className={({ isActive }: { isActive: boolean }): string => {
						return isActive ? classes.active : '';
					}}
					to='/'>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }: { isActive: boolean }): string => {
						return isActive ? classes.active : '';
					}}
					to='menu'>
					Menu
				</NavLink>
				<NavLink
					className={({ isActive }: { isActive: boolean }): string => {
						return isActive ? classes.active : '';
					}}
					to='about'>
					About
				</NavLink>
				<ShopButton amount={props.amount} />
			</ul>
		</div>
	);
};
export default NavBar;
