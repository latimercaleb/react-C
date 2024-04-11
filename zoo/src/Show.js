import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import snake from './svg/snake.svg';
import rat from './svg/rat.svg';
import { useState } from 'react';
import './Show.css';

const imgMap = { bird, cat, cow, dog, gator, horse, snake, rat };

function Show({ animalType, index }) {
	const [heartClick, setHeartClick] = useState(0);
	const clickHandler = () => {
		setHeartClick(heartClick + 1);
	};

	return (
		<div onClick={clickHandler}>
			{animalType}
			<img
				className="animal"
				alt="animal"
				src={imgMap[animalType]}></img>
			<img
				className="animal-heart"
				alt="animal heart"
				src={heart}
				style={{ width: `${10 + 10 * heartClick}px` }}></img>
		</div>
	);
}

export default Show;
