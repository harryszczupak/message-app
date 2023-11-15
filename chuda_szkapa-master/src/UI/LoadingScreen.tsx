import classes from './LoadingScreen.module.css';
import burger from '../components/assets/Burger-45.png';
const LoadingScreen = () => {
	return (
		<div className={classes.loading}>
			<img src={burger}></img>
			<p>Loading...</p>
		</div>
	);
};
export default LoadingScreen;
