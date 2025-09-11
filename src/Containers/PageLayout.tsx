import * as React from 'react';
import SideNavigation from './SideNavigation';
import Header from './Header';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export default function PageLayout(props: Props) {
  const { children } = props;

  return (
   <div className="main">
     <Header></Header>
     <div className="mainContainer">
    <div className={`dashboardWrapper`}>
      <div className={`sidebar`}>
        <SideNavigation />
      </div>
     
      <div className="pageContainer">
        
        {children}</div>
      <div
        className={`navigationOverlay `}
        onClick={() => {}}
      ></div>
    </div>
    </div>
   </div>
  );
}
