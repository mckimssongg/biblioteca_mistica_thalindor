import PropTypes from 'prop-types';
import '../Card/style.css';

const Card = ({ className, icon, title, bodyText, redirectUrl }) => {
  return (
    <a href={redirectUrl} className={`card-link ${className}`} target="_blank" rel="noopener noreferrer">
      <div className={`card-container ${className}`}>
        {icon && (
          <div className="card-icon center">
            {icon}
          </div>
        )}
        <div className="card-body link">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{bodyText}</p>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  className: PropTypes.string, 
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
};

Card.defaultProps = {
  className: 'h1-color', 
};

export default Card;
