import Tab from '@mui/material/Tab';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import { a11yProps } from '@/Utils';

type MuiTabProps = Pick<
  TabsProps,
  'value' | 'onChange' | 'className' | 'aria-label'
>;

type TabsListProps = {
  labels: string[];
  tabLabel?: string;
} & MuiTabProps;

const TabsList = ({ labels, tabLabel, ...muiTabProps }: TabsListProps) => {
  return (
    <Tabs {...muiTabProps}>
      {labels.map((label, index) => (
        <Tab key={label} label={label} {...a11yProps(index, tabLabel)} />
      ))}
    </Tabs>
  );
};

export default TabsList;
