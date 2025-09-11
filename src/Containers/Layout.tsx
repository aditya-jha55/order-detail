import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <>
      <div className="main">
        <div className="mainContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
}
