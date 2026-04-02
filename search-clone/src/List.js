import Pic from './Pic';
function List({ imgs }) {
	const replicateCards = imgs.map((img, i) => {
		console.log(img);
		return (
			<Pic
				picSource={img}
				key={i}></Pic>
		);
	});

	return (
		<div>
			Image Collection: {imgs.length}
			<div>{replicateCards}</div>
		</div>
	);
}

export default List;
