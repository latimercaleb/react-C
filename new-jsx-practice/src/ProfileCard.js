function ProfileCard({title, handle, coreImg}){
    return(
        <div>
            <h3>{title}</h3>
            <img src={coreImg}></img>
            <small><i>{handle}</i></small>
        </div>
    )
}

export default ProfileCard;