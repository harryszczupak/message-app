import classes from './Home.module.css';
import Label from './label';
import Carousel from './Carousel';
const Home = () => {
	return (
		<section className={classes.HomeSection}>
			<section>
				<h1>Witamy w Chudej Szkapie</h1>
			</section>
			<div className={classes.lableSection}>
				<Label />
				<hr
					style={{
						width: '3px',
						height: '100%',
						margin: '0 5rem 0 0',
						border: 'none',
						padding: '',
						backgroundColor: 'white',
					}}></hr>
				<Carousel />
			</div>
		</section>
	);
};
export default Home;
