
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

interface Props{
  pageScroll: boolean
}
export default function ServiceTab(props: Props) {
  const {pageScroll} = props
  
  return (
    <div
      className={clsx('table-container')}
    >
      <table>
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
        {!pageScroll &&
        <thead className="common_accord_row">
            <tr>
              <th>
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
                        <IconButton>
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
                    <th>estimated Date & Time Range</th>
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
              <Accordion>
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel1-content"
                  id="panel1-header"
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
                          <IconButton>
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
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className="th_heading">
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
                                <IconButton>
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
              <Accordion>
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel2-content"
                  id="panel2-header"
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
                          <IconButton>
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
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className="th_heading">
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
                                <IconButton>
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
              <Accordion>
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel3-content"
                  id="panel3-header"
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
                          <IconButton>
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
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className="th_heading">
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
                                <IconButton>
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
              <Accordion>
                <AccordionSummary
                  expandIcon={null}
                  aria-controls="panel4-content"
                  id="panel4-header"
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
                          <IconButton>
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
                </AccordionSummary>
                <AccordionDetails>
                  <table className="line_item_table">
                    <thead className="th_heading">
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
                                <IconButton>
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
  );
}
