import PropTypes from 'prop-types';

import { Section } from './styled';

import Title from '../Title';
import Date from '../Date';

const Statistiks = ({ title, data }) => {
  return (
    <Section>
      {title.length > 0 && <Title title={title} />}
      <Date data={data} />
    </Section>
  );
};

Statistiks.prototype = {
  title: PropTypes.string,
  data: PropTypes.arrayOf().isRequired,
};

export default Statistiks;
