import { Tab, Tabs, type TabProps } from '@mui/material';
import type { SyntheticEvent } from 'react';

type TabsListProps = {
  activeTab: number;
  onTabChange: (activeTab: number, event: SyntheticEvent) => void;
  tabLabels: string[];
  category: string;
  className?: string;
  tabProps?: TabProps;
  hidendTabIndex?: number[];
};

const TabsList = ({
  activeTab,
  onTabChange,
  tabLabels,
  category,
  className,
  tabProps,
  hidendTabIndex = [],
}: TabsListProps) => {
  function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  return (
    <div className="tabs_common">
      <Tabs
        value={activeTab}
        aria-label={`${category}-tabs`}
        onChange={(event, activeTab) => onTabChange(activeTab, event)}
        className={className}
        variant="scrollable"
        allowScrollButtonsMobile={true}
      >
        {tabLabels.map((tabLabel, index: number) => {
          if (hidendTabIndex.includes(index)) return null;
          return (
            <Tab
              value={index}
              key={tabLabel}
              label={tabLabel}
              {...tabProps}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabsList;
