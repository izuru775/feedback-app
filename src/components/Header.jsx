import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor, textDecoration }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textDecoration
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/" style={headerStyles}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
  textDecoration:'none'
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textDecoration: PropTypes.string,
};
export default Header;
