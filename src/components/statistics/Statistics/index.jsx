import PropTypes from 'prop-types';

import Title from '../Title';
import Date from '../Date';

const Statistiks = ({ title, data }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <Title title={title} />}
      <Date data={data} />
    </section>
  );
};

Statistiks.prototype = {
  title: PropTypes.string,
  data: PropTypes.arrayOf().isRequired,
};

export default Statistiks;
