import { Fragment, type ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  index: number;
  activeTab: number;
	label?: string;
}

const TabPanel = ({
	children,
	activeTab,
	index,
	label = 'simple'
}: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={activeTab !== index}
      id={`${label}-tabpanel-${index}`}
      aria-labelledby={`${label}-tab-${index}`}
    >
      {activeTab === index && (
        <Fragment>
          {children}
        </Fragment>
			)}
    </div>
  );
}

export default TabPanel;
