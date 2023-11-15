import classes from './Label.module.css';
import Opens from './Opens';
const Label = () => {
	return (
		<div className={classes.datesHours}>
			<div className={classes.datesInfo}>
				<h2
					style={{
						fontSize: '4rem',
						margin: '0',
						padding: '0',
						color: '#4d0000',
					}}>
					Nasze
				</h2>
				<span
					style={{
						fontSize: '2rem',
						margin: '0',
						padding: '0',
						width: '100%',
						textAlign: 'center',
					}}>
					godziny otwarcia
				</span>
				<hr
					style={{
						width: '60%',
						backgroundColor: '#4d0000',
						height: '3px',
						border: 'none',
					}}></hr>
			</div>
			<Opens />
		</div>
	);
};
export default Label;
