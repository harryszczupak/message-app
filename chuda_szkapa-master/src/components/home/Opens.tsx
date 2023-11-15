import classes from './Opens.module.css';
const Opens = () => {
	const opensDay = [
		'Poniedziałek',
		'Wtorek',
		'Środa',
		'Czwartek',
		'Piątek',
		'Sobota',
		'Niedziela',
	];
	return (
		<div className={classes.openHours}>
			<div className={classes.backplate}></div>
			<table style={{ width: '40%', height: '100%', padding: '1rem' }}>
				<tbody>
					{opensDay.map((day) => {
						return (
							<tr key={day}>
								<td style={{ color: 'black', fontWeight: 'bolder' }}>{day}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default Opens;
