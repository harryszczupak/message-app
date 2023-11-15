import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainNavigation from '../components/home/MainNavigation';
import classes from './RootLayout.module.css';
import gitHub from '../components/assets/github-mark.png';
import ContextProvider from '../components/Context/card-contex-provider';
const RootLayout = () => {
	return (
		<ContextProvider>
			<MainNavigation amount={1} />
			<main style={{ backgroundColor: '#595959', height: '95vh' }}>
				<Outlet />
			</main>
			<footer className={classes.footer}>
				Designed by harry szczupak
				<ul className={classes.logo}>
					<Link to='https://github.com/harryszczupak' target='_blank'>
						<img src={gitHub}></img>
					</Link>
				</ul>
			</footer>
		</ContextProvider>
	);
};
export default RootLayout;
