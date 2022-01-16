import './wonder-card.scss';

const WonderCard = ({ wonder }) => {
  const {
    title,
    wonderCard: { image },
  } = wonder;
  return (
    <div
      className="wonder-card"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <picture className="card-image-wrapper">
        <img src={image.src} alt={image.alt} className="card-image" />
      </picture>
      <h2 className="title heading heading-xlarge">{title}</h2>
    </div>
  );
};

export default WonderCard;
