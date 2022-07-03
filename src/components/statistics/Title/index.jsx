import PropTypes from 'prop-types';

import { SectionTitle } from './styled';

const Title = ({ title }) => {
  return <SectionTitle>{title}</SectionTitle>;
};

Title.prototype = {
  title: PropTypes.string,
};

export default Title;
