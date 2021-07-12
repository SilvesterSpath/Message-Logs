import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  /*   const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');

    const data = await res.json();

    setTechs(data);
    setLoading(false);
  }; */

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Person list</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((i) => <TechItem tech={i} key={i.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
