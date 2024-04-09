function ProfileCard({title, handle, coreImg}){
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image-is-1by1">
                    <img src={coreImg} alt={coreImg}></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6"><i>{handle}</i></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;