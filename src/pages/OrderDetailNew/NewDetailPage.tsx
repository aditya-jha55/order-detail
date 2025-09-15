import clsx from "clsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";

import "../../styles/orders.scss";
import "../../styles/newOrderDetail.scss";
import ServiceTab from "./components/ServiceTab";
import {
  CustomButton,
  PageHeading,
  TabElements,
  TabsList,
} from "../../Components";
import Images from "../../Utils/images";
import { useDTranslation, useHideOnScroll } from "../../customHooks";
import { ROUTES } from "../../helpers";
import SectionContainerCollapsable from "../../Components/SectionContainerCollapsable";
import {
  useEffect,
  useRef,
  useState,
  type RefObject,
  type SyntheticEvent,
} from "react";
import OrderNameCard from "./components/OrderNameCard";
import { useScrollPercentage } from "../../customHooks/useScrolledPercentage";

const tabCategory = "order-details";

export default function OrderDetailsNewUi() {
  const [activeTab] = useState(0);

  const tC = useDTranslation("Common");
  const t = useDTranslation("orders.detail");

  const ChatNowButton = () => (
    <CustomButton
      size="large"
      variant="outlined"
      text={tC("chat_now")}
      showIcon={true}
      width="auto"
      type="submit"
      id="chat_now"
      iconPosition="start"
      icon={Images.CHAT}
      className="btnChatNow"
    />
  );

  function handleApproveItems(): void {
    throw new Error("Function not implemented.");
  }

  function handleCancelOrderItems(): void {
    throw new Error("Function not implemented.");
  }

  function handleTabChange(
    _activeTab: number,
    _event: SyntheticEvent<Element, Event>
  ): void {
    throw new Error("Function not implemented.");
  }
  // ==========for syicky location================

  const sectionScrollerRef = useRef<HTMLDivElement>(null);
  const isPageHeadingVisible = useHideOnScroll(
    sectionScrollerRef as RefObject<HTMLElement>,
    {
      downThreshold: 100,
      scrollUpThreshold: 100,
    }
  );

  useEffect(() => {
    console.log(isPageHeadingVisible);
  }, [isPageHeadingVisible]);

  console.log(isPageHeadingVisible);
  const scrollPercent = useScrollPercentage(sectionScrollerRef);
  // ==========for syicky location================
  return (
    <>
      <div
        className={clsx("pageBody main_order_detail")}
        ref={sectionScrollerRef}
      >
        <table>
          <thead className="pageHeaderTr">
            <tr>
              <th>
                <PageHeading
                  pageTitle={t("title")}
                  pageName={"Order Details"}
                  navigateUrl={ROUTES.ORDERS}
                  buttonChildren={
                    <div className="orderDetailTop">
                      <div className="topRow">
                        <p>{scrollPercent.toFixed(0)}%</p>
                        <div className="filter_ac"></div>
                        <CustomButton
                          size="large"
                          variant="outlined"
                          text={t("cancel_order")}
                          width="auto"
                          id="cancel_order"
                          onClick={handleCancelOrderItems}
                        />
                        <CustomButton
                          size="large"
                          variant="contained"
                          text={t("approve_order")}
                          showIcon={false}
                          width="auto"
                          type="submit"
                          onClick={handleApproveItems}
                          id="approve_order"
                        />
                        <ChatNowButton />
                      </div>
                    </div>
                  }
                />
              </th>
            </tr>
          </thead>
          <thead className={clsx({fadeOutSection: scrollPercent > 13})}>
            <tr>
              <th className="tr_text_left">
                <SectionContainerCollapsable
                  heading={t("order_summary")}
                  children={
                    <>
                      <div className="formContainer">
                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {t("production_name")}
                            </FormLabel>
                            <p className="labelText">Superhero Flims</p>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {t("order_id")}{" "}
                            </FormLabel>
                            <p className="labelText">JHFFD-HDGTE-2746</p>
                          </Grid>
                          <Grid
                            size={{ xs: 12, md: 4 }}
                            container
                            direction="column"
                            alignItems="flex-end"
                          >
                            <FormLabel className="labelHeading">
                              {tC("branch")}
                            </FormLabel>
                            <p className="labelText">
                              Reels Security, Los Angeles
                            </p>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {t("order_date")}
                            </FormLabel>
                            <p className="labelText">
                              Oct 23, 2023 | 06:00 AM (EST)
                            </p>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {tC("orderRange")}
                            </FormLabel>
                            <p className="labelText">
                              Aug 10,2023 - Aug 13,2023
                            </p>
                          </Grid>

                          <Grid
                            container
                            size={{ xs: 12, md: 4 }}
                            direction="column"
                            alignItems="flex-end"
                          >
                            <FormLabel className="labelHeading">
                              {t("canceledBy")}
                            </FormLabel>
                            <p className="labelText">Jamie Falcon</p>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {t("order_by")}
                            </FormLabel>
                            <p className="labelText">Jamie Falcon</p>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {t("mobile_number")}
                            </FormLabel>
                            <p className="labelText">+1 (484) 457 8732</p>
                          </Grid>
                          <Grid
                            size={{ xs: 12, md: 4 }}
                            container
                            direction="column"
                            alignItems="flex-end"
                          >
                            <FormLabel className="labelHeading">
                              {t("email_address")}
                            </FormLabel>
                            <p className="labelText">JamieFal@rediffmail.com</p>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {t("set_name")}
                            </FormLabel>

                            <p className="labelText">-</p>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <FormLabel className="labelHeading">
                              {t("desc")}
                            </FormLabel>
                            <p className="labelText">
                              Lorem Ipsum is simply dummy text of the printing
                              industry...
                              <a href="">View More</a>
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    </>
                  }
                />
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="tr_text_left">
                <Grid
                  container
                  spacing={2}
                  // className={clsx({ hideSection: !isPageHeadingVisible })}
                >
                  <Grid size={{ xs: 12, md: 6 }}>
                    <OrderNameCard setId="" setName="INT. DANS'S HOUSE" />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <div className="setDate">
                      <h2>Aug 10, 2023 – Aug 16, 2023</h2>
                    </div>
                  </Grid>
                </Grid>
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>
                <Grid
                  size={{ xs: 12 }}
                  // className={clsx({ hideSection: !isPageHeadingVisible })}
                >
                  <div className={clsx("sectionContainer")}>
                    <div className="sectionHeadings">
                      <h3>{t("items_overview")}</h3>
                    </div>
                  </div>
                </Grid>
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>
                <div className="tabs">
                  <Box sx={{ width: "100%" }} padding={0}>
                    <Box
                      sx={{ borderBottom: 0, borderColor: "divider" }}
                      className={clsx("tabsContainer order_detail_tabs", {
                        // tabsScrolled: !isPageHeadingVisible,
                      })}
                    >
                      <TabsList
                        activeTab={activeTab}
                        tabLabels={[
                          `${tC("services")}`,
                          `${tC("rentals")}`,
                          `${tC("products")}`,
                        ]}
                        onTabChange={handleTabChange}
                        category={tabCategory}
                      />
                      <>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          {activeTab === 0 && (
                            <CustomButton
                              id="edit"
                              text={tC("edit")}
                              variant="outlined"
                              icon={Images.EDIT_BLUE_IC}
                              iconPosition="start"
                              showIcon
                            />
                          )}
                        </Box>
                      </>
                    </Box>
                  </Box>
                </div>
              </th>
            </tr>
          </thead>
          <thead className="serviceTableContainer">
            <tr>
              <th>
                <Box sx={{ pt: 1, px: 0, pb: 0 }}>
                  <div
                    className="new_detail_section"
                    // ref={sectionScrollerRef}
                  >
                    <div className="tabContainer">
                      <TabElements
                        activeTab={activeTab}
                        elements={[
                          <ServiceTab pageScroll={isPageHeadingVisible} />,
                          <>2</>,
                          <>3</>,
                        ]}
                        label={tabCategory}
                      />
                    </div>
                  </div>
                </Box>
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>
                <div className="scroll_space"></div>
              </th>
            </tr>
          </thead>
        </table>

        {/* <div className={`formScroller order_detail`}>
          
          

        

          <SectionContainer
              heading={t('items_overview')}
              children={
                <></>
              }
              className='new_detail_section'
              ref={sectionScrollerRef}
            />
          <div className="formContainer">
            
          </div>
        </div> */}
      </div>
    </>
  );
}
