import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './Hamburger.module.css';

const hamburger = () => (
  <FontAwesomeIcon icon={faBars} className={classes.Hamburger} />
);

export default hamburger;
