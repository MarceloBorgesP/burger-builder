import React from 'react';
import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div onClick={props.sideDrawerOpened} className={classes.MobileOnly}>
      <Hamburger />
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
