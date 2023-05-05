import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import Seo from '../components/seo';

const iconStyle = {
  maxHeight: '1rem',
  marginRight: '1rem',
  marginLeft: '1rem',
};

const NotFoundPage = () => (
  <>
    <Seo title='404' />
    <h1>404</h1>
    <p>Looks like you&apos;re lost in space.</p>
    <Link to='/'>
      <FontAwesomeIcon icon={faRocket} style={iconStyle} />
      Back to safety
      <FontAwesomeIcon icon={faRocket} style={iconStyle} />
    </Link>
  </>
);

export default NotFoundPage;
