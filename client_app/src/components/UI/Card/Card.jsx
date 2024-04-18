import PropTypes from 'prop-types';

const Card = ({ imageUrl, title, bodyText, redirectUrl }) => {
  return (
    <a href={redirectUrl}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{bodyText}</p>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
};

export default Card;
