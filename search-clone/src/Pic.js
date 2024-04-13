function Pic(props) {
	return (
		<div class="card ">
			<div class="card-image">
				<figure class="image image-is-1by1">
					<img
						src={props.picSource.urls.small}
						alt={props.picSource.slug}></img>
				</figure>
			</div>
		</div>
	);
}

export default Pic;
