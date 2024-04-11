import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import { useState } from 'react';
import './Show.css';

// TODO: My impl has a bug, you know what it is. Figure it out and fix it up before moving on to the next section, work on it while you review
const imgMap = { bird, cat, cow, dog, gator, horse };

function Show({ animalType }) {
    const [heartClick, setHeartClick] = useState(0);
    const clickHandler = () => {
        setHeartClick(heartClick + 1)
    };

	return (
		<ul className='animal-list'>
			{animalType.map((animal, index) => {
				return (
					<li className='animal-wrapper'>
                        {animal}
                        <div onClick={clickHandler}>
                            <img className='animal'src={imgMap[animal]}></img>
                            <img className='animal-heart'src={heart} style={{width: `${10 + 10 * heartClick}px`}}></img>
                        </div>
                    </li>
				);
			})}
		</ul>
	);
}

export default Show;
