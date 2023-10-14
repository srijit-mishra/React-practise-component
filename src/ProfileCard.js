function ProfileCard({ name, avatarURL, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img alt={name} src={avatarURL} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{name}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
