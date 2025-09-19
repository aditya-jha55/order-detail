
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import Images from '../../../Utils/images';
import { CustomSelect } from '../../../Components';
import ServiceOverviewPricingDialog from './ServiceOverviewPricing';
import React, { type RefObject } from 'react';
import ShiftDetailPricingDialog from './ShiftDetailPricingDialog';
import OrderNameCard from './OrderNameCard';
import useStickyHeaderIndexes from '../../../customHooks/useDetectStickyHead';

interface Props{
  pageScroll: boolean;
  scrolledPercentage: number
 containerRef: RefObject<HTMLDivElement | null>;
}
export default function ServiceTab(props: Props) {
  const {pageScroll, scrolledPercentage, containerRef} = props
  const [serviceOpen, SerServiceOpen] = React.useState(false);
  const [detailOpen, SetDetailOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const toggleAccordion = (panel: string) => {
    setExpanded((prev) => (prev === panel ? false : panel));
    // console.log(`${panel} is ${expanded === panel ? "collapsed" : "expanded"}`);
  };
  const isAnyOpen = expanded !== false;
  // console.log(isAnyOpen);

  // ==================detect sticky head==================
  const ww = window.innerWidth;
  console.log(ww)
  const stuckIndexes = useStickyHeaderIndexes(containerRef, "thead.fixedSetNameRow", 
    // 60

     ww < 600 ? 95 : 
     ww > 600 && ww <= 768 ? 58:
     ww > 768 && ww <= 1024 ? 58 : 90
  );
  console.log(stuckIndexes)
// ==================detect sticky head================
  return (
    <>
    <div
      className={clsx('table-container')}
    >
      <table>
        <thead className='fixedSetNameRow' data-id="sticky-1">
            <tr>
              <th className="tr_text_left" colSpan={10}>
                <div className="setNameRow">
                  <div className={clsx('setNameCartSec', {hide: scrolledPercentage > 35})}>
                      <OrderNameCard setId="" setName="1 INT. DANS'S HOUSE" />
                      <div className="setDate">
                      <h2>Aug 10, 2023 – Aug 16, 2023</h2>
                    </div>
                  </div>
                  <div className={clsx('setNameScrollSec', {show: scrolledPercentage > 35})}>
                      <h3>1 INT. DANS'S HOUSE</h3>
                        <p>Aug 10, 2023 – Aug 16, 2023</p>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
        <thead className="loc_row">
          <tr>
            <th colSpan={10}>
              <div className="location_name">
                <div className="icon">
                  <figure>
                    <img src={Images.LOCATION_BLUE_IC} alt="" />
                  </figure>
                </div>
                <div className="info">
                  <p className="text_left top_rel auto_ellipse cursor_pointer">
                    <div
                      className="ellipse_rental w_auto"
                      aria-label="Noida Stadium, Noida Stadium, Noida, Uttar Pradesh 201307, India"
                      data-mui-internal-clone-element="true"
                    >
                      Noida Stadium, Noida Stadium, Noida, Uttar Pradesh 201307,
                      India
                    </div>
                    <div
                      className="ellipse_rental w_location"
                      aria-label="Primary Shooting Location"
                      data-mui-internal-clone-element="true"
                    >
                      - Primary Shooting Location
                    </div>
                  </p>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        {!pageScroll && isAnyOpen &&
        <thead className="common_accord_row">
            <tr>
              <th colSpan={10}>
                <table className="order_set_table">
                  <thead>
                    <tr>
                      <th>
                        <div className="image_n_text">
                          <img
                            className="listImage pointer"
                            src={Images.USER_IMAGE}
                            alt=""
                          />
                          <p className="auto_ellipse link pointer">
                            Production Security
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="status completed">Order Placed</div>
                      </th>
                      <th>
                        <IconButton onClick={()=>SerServiceOpen(true)}>
                          <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                        </IconButton>
                      </th>
                      <th>1</th>
                      <th>12</th>
                      <th>
                        <p>
                          Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19, 2023,
                          6:00 PM (EST)
                        </p>
                      </th>
                      <th>
                        <a href="javascript:void(0)">Attachments (4)</a>
                      </th>
                      <th>
                        <IconButton>
                          <img src={Images.NOTES_IC} alt="" />
                        </IconButton>
                      </th>
                      <th>
                        <div className="tableActions">
                          <IconButton>
                            <MoreVertIcon />
                          </IconButton>
                          <IconButton>
                            <img src={Images.ARROW_DOWN} />
                          </IconButton>
                        </div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </th>
            </tr>
          </thead>
        }

        <thead className="main_header">
          <tr className="th_heading">
            <th colSpan={10}>
              <table className="order_set_table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Delivery Status</th>
                    <th>Details</th>
                    <th>Qty.</th>
                    <th>Units</th>
                    <th>Estimated Date & Time Range</th>
                    <th>Attachment</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>
            </th>
          </tr>
        </thead>
        <thead className="accord_row">
          <tr>
            <th colSpan={10}>
              <Accordion 
              expanded={expanded === "panel1"}
              >
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  onClick={(e) => e.stopPropagation()}
                  onFocus={(e) => e.stopPropagation()}
                >
                  <table className="order_set_table">
                    <thead>
                      <tr>
                        <th>
                          <div className="image_n_text">
                            <img
                              className="listImage pointer"
                              src={Images.USER_IMAGE}
                              alt=""
                            />
                            <p className="auto_ellipse link pointer">
                              Production Security
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="status completed">Order Placed</div>
                        </th>
                        <th>
                          <IconButton onClick={()=>SerServiceOpen(true)}>
                            <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>1</th>
                        <th>12</th>
                        <th>
                          <p>
                            Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19, 2023,
                            6:00 PM (EST)
                          </p>
                        </th>
                        <th>
                          <a href="javascript:void(0)">Attachments (4)</a>
                        </th>
                        <th>
                          <IconButton>
                            <img src={Images.NOTES_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>
                          <div className="tableActions">
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                            <IconButton
                            onClick={(e) => {
                                e.stopPropagation(); // prevent summary toggle
                                toggleAccordion("panel1");
                              }}
                            >
                              <img src={Images.ARROW_DOWN} />
                            </IconButton>
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className={clsx('th_heading', {th_headingScroll: !pageScroll})}>
                      <tr>
                        <th>Assignee</th>
                        <th>Shift Status</th>
                        <th>Approval Status</th>
                        <th>Details</th>
                        <th>Date & Time Range</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map(() => {
                        return (
                          <>
                            <tr>
                              <td colSpan={6}>
                                <div className="record-heading-cell">
                                  <p>September 5, 2025</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="image_n_text">
                                  <img
                                    className="listImage pointer"
                                    src={Images.USER_IMAGE}
                                    alt=""
                                  />
                                  <p className="auto_ellipse link pointer">
                                    No Assignee
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="status pending">
                                  In Progress
                                </div>
                              </td>
                              <td>
                                <CustomSelect
                                  id=""
                                  placeHolderText="Pending Authorization"
                                  defaultValue="Pending Authorization"
                                  options={[]}
                                />
                              </td>
                              <td>
                                <IconButton onClick={()=>{SetDetailOpen(true)}}>
                                  <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                                </IconButton>
                              </td>
                              <td>
                                <p>
                                  Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19,
                                  2023, 6:00 PM (EST)
                                </p>
                              </td>
                              <td>
                                <IconButton>
                                  <img src={Images.NOTES_IC} alt="" />
                                </IconButton>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </AccordionDetails>
              </Accordion>
            </th>
          </tr>
        </thead>
        <thead className="accord_row">
          <tr>
            <th colSpan={10}>
              <Accordion  expanded={expanded === "panel2"}>
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  onClick={(e) => e.stopPropagation()}
                  onFocus={(e) => e.stopPropagation()}
                >
                  <table className="order_set_table">
                    <thead>
                      <tr>
                        <th>
                          <div className="image_n_text">
                            <img
                              className="listImage pointer"
                              src={Images.USER_IMAGE}
                              alt=""
                            />
                            <p className="auto_ellipse link pointer">
                              Production Security
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="status completed">Order Placed</div>
                        </th>
                        <th>
                          <IconButton onClick={()=>SerServiceOpen(true)}>
                            <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>1</th>
                        <th>12</th>
                        <th>
                          <p>
                            Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19, 2023,
                            6:00 PM (EST)
                          </p>
                        </th>
                        <th>
                          <a href="javascript:void(0)">Attachments (4)</a>
                        </th>
                        <th>
                          <IconButton>
                            <img src={Images.NOTES_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>
                          <div className="tableActions">
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                            <IconButton
                            onClick={(e) => {
                                e.stopPropagation(); // prevent summary toggle
                                toggleAccordion("panel2");
                              }}
                            >
                              <img src={Images.ARROW_DOWN} />
                            </IconButton>
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className={clsx('th_heading', {th_headingScroll: !pageScroll})}>
                      <tr>
                        <th>Assignee</th>
                        <th>Shift Status</th>
                        <th>Approval Status</th>
                        <th>Details</th>
                        <th>Date & Time Range</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map(() => {
                        return (
                          <>
                            <tr>
                              <td colSpan={6}>
                                <div className="record-heading-cell">
                                  <p>September 5, 2025</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="image_n_text">
                                  <img
                                    className="listImage pointer"
                                    src={Images.USER_IMAGE}
                                    alt=""
                                  />
                                  <p className="auto_ellipse link pointer">
                                    No Assignee
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="status pending">
                                  In Progress
                                </div>
                              </td>
                              <td>
                                <CustomSelect
                                  id=""
                                  placeHolderText="Pending Authorization"
                                  defaultValue="Pending Authorization"
                                  options={[]}
                                />
                              </td>
                              <td>
                                <IconButton onClick={()=>{SetDetailOpen(true)}}>
                                  <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                                </IconButton>
                              </td>
                              <td>
                                <p>
                                  Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19,
                                  2023, 6:00 PM (EST)
                                </p>
                              </td>
                              <td>
                                <IconButton>
                                  <img src={Images.NOTES_IC} alt="" />
                                </IconButton>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </AccordionDetails>
              </Accordion>
            </th>
          </tr>
        </thead>
        <thead className='fixedSetNameRow' data-id="sticky-2">
            <tr>
              <th className="tr_text_left" colSpan={10}>
                <div className="setNameRow">
                  <div className={clsx('setNameCartSec', {hide: scrolledPercentage > 35})}>
                      <OrderNameCard setId="" setName="2 INT. DANS'S HOUSE" />
                      <div className="setDate">
                      <h2>Aug 10, 2023 – Aug 16, 2023</h2>
                    </div>
                  </div>
                  <div className={clsx('setNameScrollSec', {show: scrolledPercentage > 35})}>
                      <h3>2 INT. DANS'S HOUSE</h3>
                        <p>Aug 10, 2023 – Aug 16, 2023</p>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
        <thead className="loc_row">
          <tr>
            <th colSpan={10}>
              <div className="location_name">
                <div className="icon">
                  <figure>
                    <img src={Images.LOCATION_BLUE_IC} alt="" />
                  </figure>
                </div>
                <div className="info">
                  <p className="text_left top_rel auto_ellipse cursor_pointer">
                    <div
                      className="ellipse_rental w_auto"
                      aria-label="Noida Stadium, Noida Stadium, Noida, Uttar Pradesh 201307, India"
                      data-mui-internal-clone-element="true"
                    >
                      Noida Stadium, Noida Stadium, Noida, Uttar Pradesh 201307,
                      India
                    </div>
                    <div
                      className="ellipse_rental w_location"
                      aria-label="Primary Shooting Location"
                      data-mui-internal-clone-element="true"
                    >
                      - Primary Shooting Location
                    </div>
                  </p>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <thead className="accord_row">
          <tr>
            <th colSpan={10}>
              <Accordion  expanded={expanded === "panel3"}>
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  onClick={(e) => e.stopPropagation()}
                  onFocus={(e) => e.stopPropagation()}
                >
                  <table className="order_set_table">
                    <thead>
                      <tr>
                        <th>
                          <div className="image_n_text">
                            <img
                              className="listImage pointer"
                              src={Images.USER_IMAGE}
                              alt=""
                            />
                            <p className="auto_ellipse link pointer">
                              Production Security
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="status completed">Order Placed</div>
                        </th>
                        <th>
                          <IconButton onClick={()=>SerServiceOpen(true)}>
                            <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>1</th>
                        <th>12</th>
                        <th>
                          <p>
                            Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19, 2023,
                            6:00 PM (EST)
                          </p>
                        </th>
                        <th>
                          <a href="javascript:void(0)">Attachments (4)</a>
                        </th>
                        <th>
                          <IconButton>
                            <img src={Images.NOTES_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>
                          <div className="tableActions">
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                            <IconButton
                             onClick={(e) => {
                                e.stopPropagation(); // prevent summary toggle
                                toggleAccordion("panel3");
                              }}
                            >
                              <img src={Images.ARROW_DOWN} />
                            </IconButton>
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className={clsx('th_heading', {th_headingScroll: !pageScroll})}>
                      <tr>
                        <th>Assignee</th>
                        <th>Shift Status</th>
                        <th>Approval Status</th>
                        <th>Details</th>
                        <th>Date & Time Range</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                     {[1, 2, 3, 4, 5].map(() => {
                        return (
                          <>
                            <tr>
                              <td colSpan={6}>
                                <div className="record-heading-cell">
                                  <p>September 5, 2025</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="image_n_text">
                                  <img
                                    className="listImage pointer"
                                    src={Images.USER_IMAGE}
                                    alt=""
                                  />
                                  <p className="auto_ellipse link pointer">
                                    No Assignee
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="status pending">
                                  In Progress
                                </div>
                              </td>
                              <td>
                                <CustomSelect
                                  id=""
                                  placeHolderText="Pending Authorization"
                                  defaultValue="Pending Authorization"
                                  options={[]}
                                />
                              </td>
                              <td>
                                <IconButton onClick={()=>{SetDetailOpen(true)}}>
                                  <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                                </IconButton>
                              </td>
                              <td>
                                <p>
                                  Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19,
                                  2023, 6:00 PM (EST)
                                </p>
                              </td>
                              <td>
                                <IconButton>
                                  <img src={Images.NOTES_IC} alt="" />
                                </IconButton>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </AccordionDetails>
              </Accordion>
            </th>
          </tr>
        </thead>
        <thead className="accord_row">
          <tr>
            <th colSpan={10}>
              <Accordion  expanded={expanded === "panel4"}>
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel4-content"
                  id="panel4-header"
                  onClick={(e) => e.stopPropagation()}
                  onFocus={(e) => e.stopPropagation()}
                >
                  <table className="order_set_table">
                    <thead>
                      <tr>
                        <th>
                          <div className="image_n_text">
                            <img
                              className="listImage pointer"
                              src={Images.USER_IMAGE}
                              alt=""
                            />
                            <p className="auto_ellipse link pointer">
                              Production Security
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="status completed">Order Placed</div>
                        </th>
                        <th>
                          <IconButton onClick={()=>SerServiceOpen(true)}>
                            <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>1</th>
                        <th>12</th>
                        <th>
                          <p>
                            Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19, 2023,
                            6:00 PM (EST)
                          </p>
                        </th>
                        <th>
                          <a href="javascript:void(0)">Attachments (4)</a>
                        </th>
                        <th>
                          <IconButton>
                            <img src={Images.NOTES_IC} alt="" />
                          </IconButton>
                        </th>
                        <th>
                          <div className="tableActions">
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                            <IconButton
                             onClick={(e) => {
                                e.stopPropagation(); // prevent summary toggle
                                toggleAccordion("panel4");
                              }}
                            >
                              <img src={Images.ARROW_DOWN} />
                            </IconButton>
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className={clsx('th_heading', {th_headingScroll: !pageScroll})}>
                      <tr>
                        <th>Assignee</th>
                        <th>Shift Status</th>
                        <th>Approval Status</th>
                        <th>Details</th>
                        <th>Date & Time Range</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map(() => {
                        return (
                          <>
                            <tr>
                              <td colSpan={6}>
                                <div className="record-heading-cell">
                                  <p>September 5, 2025</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="image_n_text">
                                  <img
                                    className="listImage pointer"
                                    src={Images.USER_IMAGE}
                                    alt=""
                                  />
                                  <p className="auto_ellipse link pointer">
                                    No Assignee
                                  </p>
                                </div>
                              </td>
                              <td>
                                <div className="status pending">
                                  In Progress
                                </div>
                              </td>
                              <td>
                                <CustomSelect
                                  id=""
                                  placeHolderText="Pending Authorization"
                                  defaultValue="Pending Authorization"
                                  options={[]}
                                />
                              </td>
                              <td>
                                <IconButton onClick={()=>{SetDetailOpen(true)}}>
                                  <img src={Images.CALENDAR_SEARCH_IC} alt="" />
                                </IconButton>
                              </td>
                              <td>
                                <p>
                                  Aug 10, 2023, 6:00 AM (EST) –<p></p> Aug 19,
                                  2023, 6:00 PM (EST)
                                </p>
                              </td>
                              <td>
                                <IconButton>
                                  <img src={Images.NOTES_IC} alt="" />
                                </IconButton>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </AccordionDetails>
              </Accordion>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <ServiceOverviewPricingDialog open={serviceOpen} handleClose={()=>{SerServiceOpen(false)}}/>
      <ShiftDetailPricingDialog open={detailOpen} handleClose={()=>{SetDetailOpen(false)}}/>
    </>
  );
}
