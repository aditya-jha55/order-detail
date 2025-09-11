import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import clsx from 'clsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';
import Images from '../Utils/images';
interface Props {
  children?: JSX.Element | JSX.Element[];
  heading: String;
  hideHeader?: boolean;
  className?: string;
  ButtonNode?: JSX.Element;
}

export default function SectionContainerCollapsable(props: Props) {
  const { children, heading, hideHeader = true, className, ButtonNode } = props;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className={clsx('sectionContainer sectionContainerAccordian', className)} >
      <Accordion
        disableGutters
        defaultExpanded={true}
        elevation={0}
        square={true}
        // expanded={expanded === 'panel1'}
        
      >
        <AccordionSummary
          expandIcon={<img src={Images.ARROW_DOWN_WHITE_IC}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className="sectionHeadings"
          
        >
          {hideHeader && (
            <>
              <h3>{heading}</h3>
              <div className="sectionButton">{ButtonNode}</div>
            </>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <div className={clsx('sectionBody', { no_heading: !hideHeader })}>
            {children}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
