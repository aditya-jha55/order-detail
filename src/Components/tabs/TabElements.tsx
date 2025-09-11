import { Fragment, type ReactElement } from 'react';
import { TabPanel } from '.';

type TabElementsProps = {
	activeTab: number;
	elements: ReactElement[];
	label?: string;
}

const TabElements = ({
	activeTab,
	elements,
	label,
}: TabElementsProps) => {
	return (
		<Fragment>
			{
				elements.map((element, index) => (
					<TabPanel
            key={`tabpanel-${index}`}
            activeTab={activeTab}
						index={index}
						label={label}
					>
						{element}
					</TabPanel>
				))
			}
		</Fragment>
	);
}

export default TabElements;
