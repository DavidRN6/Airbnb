function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.image} className="card-img" />
      <div className="card-stats">
        <img src="Star 1.png" className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) .</span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
