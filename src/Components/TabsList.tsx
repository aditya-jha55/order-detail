import Tab from '@mui/material/Tab';
import Tabs, { type TabsProps } from '@mui/material/Tabs';

type MuiTabProps = Pick<
  TabsProps,
  'value' | 'onChange' | 'className' | 'aria-label'
>;

type TabsListProps = {
  labels: string[];
  tabLabel?: string;
} & MuiTabProps;


const TabsList = ({ labels, tabLabel, ...muiTabProps }: TabsListProps) => {
    function a11yProps(index: number, _tabLabel: string | undefined) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  return (
    <Tabs {...muiTabProps}>
      {labels.map((label, index) => (
        <Tab key={label} label={label} {...a11yProps(index, tabLabel)} />
      ))}
    </Tabs>
  );
};

export default TabsList;
