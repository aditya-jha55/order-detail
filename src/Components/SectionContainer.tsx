import clsx from 'clsx';
import type { JSX } from 'react';

interface Props {
  children?: JSX.Element | JSX.Element[];
  heading: String;
  hideHeader?: boolean;
  className?: string;
  ButtonNode?: JSX.Element
}

export default function SectionContainer(props: Props) {
  const { children, heading, hideHeader = true, className, ButtonNode } = props;
  return (
    <div className={clsx('sectionContainer', className)}>
      {hideHeader && (
        <div className="ss_heading">
          <div className="sectionHeadings">
          <h3>{heading}</h3>
          <div className="sectionButton">
            {ButtonNode}
          </div>
        </div>
        </div>
      )}
      <div className={clsx('sectionBody', { no_heading: !hideHeader })}>
        {children}
      </div>
    </div>
  );
}
