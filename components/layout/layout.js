import { Fragment } from 'react';
import MainNavigation from './main-navigation';

const Layout = () => {
  return(
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
