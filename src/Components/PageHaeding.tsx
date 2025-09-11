import type { JSX } from '@emotion/react/jsx-runtime';
import clsx from 'clsx';

interface PageHeadingProps {
  buttonChildren?: JSX.Element | JSX.Element[];
  pageTitle: String;
  pageName?: string;
  navigateUrl?: string | number;
  isNestedBreadcrum?: boolean;
  breadcrumNested?: JSX.Element;
  onBackClick?: any;
  className?: string
}

export default function PageHeading(props: PageHeadingProps) {
  const {
    buttonChildren,
    pageTitle,
    pageName,
    isNestedBreadcrum,
    breadcrumNested,
    className
  } = props;
  return (
    <div className={clsx('pageHeading', className)}>
      <div className="headings">
        <h3>{pageTitle}</h3>
        {isNestedBreadcrum ? (
          <>{breadcrumNested}</>
        ) : (
          <>
            {pageName ? (
              <ul className="breadCrums">
                <li
                  onClick={() => {}}
                >
                  {pageTitle}
                </li>

                <li>{pageName}</li>
              </ul>
            ) : null}
          </>
        )}
      </div>
      {buttonChildren && <div className="buttons">{buttonChildren}</div>}
    </div>
  );
}
