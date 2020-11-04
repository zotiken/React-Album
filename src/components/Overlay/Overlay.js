import React from "react";
import PropTypes from 'prop-types';

import  './Overlay.scss';


const Overlay = props => (
    props.show ? <div className="Overlay" onClick={props.close}></div> : null
);

Overlay.propTypes = {
    show: PropTypes.bool
};

export default Overlay;
