import restaurant from '../assets/restaurant.jpg';
import burgers from '../assets/burgers.jpg';
import chief from '../assets/chief.jpg';
import Slider from './Slider';
import classes from './Carousel.module.css';
const Carousel = () => {
	const gallery: string[] = [restaurant, chief, burgers];
	return (
		<div className={classes.gallery}>
			<Slider slide={gallery} />
		</div>
	);
};
export default Carousel;
