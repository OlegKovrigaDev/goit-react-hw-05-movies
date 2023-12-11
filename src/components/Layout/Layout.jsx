import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <div>
        <header>
          <nav>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/movies">Movie</NavLink>
          </nav>
        </header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
