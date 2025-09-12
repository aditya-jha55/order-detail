import { Grid, Dialog, IconButton } from "@mui/material";
import Images from "../../../Utils/images";

type OrderDetailsDialogProps = {
  open: boolean;
  handleClose: () => void;
};

const ServiceOverviewPricingDialog = ({
  open,
  handleClose,
}: OrderDetailsDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="order-details-dialog"
      aria-describedby="order-details"
    >
      <div className="dialogWrapper warning orderAddress w__600">
        <div className="dialogHeader flex sps_between">
          <h4 className="small">Service Overview & Pricing</h4>
          <IconButton onClick={handleClose}>
            <img src={Images.CLOSE} alt={"Close"} />
          </IconButton>
        </div>

        <div className="doalogBody small">
          <p>
            Comprehensive breakdown of service costs, schedule and pricing
            information for Production Security.
          </p>

          <div className="order_name">
            <div className="order_name_inner in-dialog">
              <div className="icon">
                <figure>
                  <img className="listImage" src={Images.USER_IMAGE} alt={""} />
                </figure>
              </div>
              <div className="info">
                <h3>Production Security Service</h3>
                <ul>
                  <li>
                    <p className="light">Qty.</p>
                    <p className="dark">1</p>
                  </li>
                  <li>
                    <p className="light">Total Units</p>
                    <p className="dark">8</p>
                  </li>
                  <li>
                    <p className="light">Shift Type</p>
                    <p className="dark">12 Hr - Day</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="schedule">
            <h3>Schedule</h3>
            <p>Time Range</p>
            <h3>Aug 10, 2023, 6:00 AM (EST) - Aug 13, 2023, 6:00 PM(EST)</h3>
          </div>
          <div className="border_8"></div>

          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Set</p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data">INT. COFFEEE HOUSE</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Production Schedule</p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data">Pre - Production</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Set Schedule </p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data"> Prep</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Location </p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data">
                {" "}
                The Smith Residence, 395 Creature Road, Ashtead, W77{" "}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p> Location Purposes</p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data"> Primary Shooting Location, Bascamp</p>
            </Grid>
          </Grid>
          <div className="border_8"></div>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Minimum Charges </p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data"> $60/hr for 6hrs</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Unit Price </p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data">$10/hr </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Estimated Total </p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data"> $166</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <p>Actual Cost </p>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <p className="dialog-data"> $304</p>
            </Grid>
          </Grid>
        </div>
      </div>
    </Dialog>
  );
};

export default ServiceOverviewPricingDialog;
