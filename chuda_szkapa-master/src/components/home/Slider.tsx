import { useState } from 'react';
import classes from './Slide.module.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { BiCircle } from 'react-icons/bi';
const Slider = (props: { slide: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const nextImg = () => {
		setCurrentIndex((prev: number): number => {
			if (prev === props.slide.length - 1) return 0;
			return prev + 1;
		});
	};
	const prevImg = () => {
		setCurrentIndex((prev: number): number => {
			if (prev === 0) return props.slide.length - 1;
			return prev - 1;
		});
	};
	const CirclesChanger = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className={classes.slider}>
			<div
				style={{
					display: 'flex',
					width: '100%',
					overflow: 'hidden',
					height: '100%',
				}}>
				{props.slide.map((el) => {
					return (
						<img
							key={el}
							className={classes.slideImg}
							style={{
								translate: `${-100 * currentIndex}%`,
								flexShrink: 0,
								flexGrow: 0,
							}}
							src={el}></img>
					);
				})}
			</div>
			<div className={classes.changeButt} style={{ left: 0 }}>
				<FiArrowLeft
					onClick={prevImg}
					style={{
						position: 'absolute',
						height: '100%',
						border: 'none',
					}}></FiArrowLeft>
			</div>
			<div className={classes.changeButt} style={{ right: 0 }}>
				<FiArrowRight
					onClick={nextImg}
					style={{
						position: 'absolute',
						height: '100%',
						border: 'none',
					}}></FiArrowRight>
			</div>
			<ul
				style={{
					display: 'flex',
					position: 'absolute',
					width: '15%',
					justifyContent: 'space-between',
				}}>
				{props.slide.map((_, index) => {
					return (
						<BiCircle
							key={_}
							onClick={() => CirclesChanger(index)}
							className={
								index == currentIndex ? classes.active : ''
							}></BiCircle>
					);
				})}
			</ul>
		</div>
	);
};
export default Slider;
