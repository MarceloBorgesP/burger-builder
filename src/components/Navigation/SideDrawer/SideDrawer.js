import React from 'react';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = props => {
  const attachedClasses = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close
  ];

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
