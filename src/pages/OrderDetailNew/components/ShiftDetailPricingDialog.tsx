import { Grid, Dialog, IconButton } from '@mui/material';
import Images from '../../../Utils/images';



type OrderDetailsDialogProps = {
  open: boolean;
  handleClose: () => void;
};

const ShiftDetailPricingDialog = ({
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
          <h4 className="small">
           Shift Detail & Pricing
          </h4>
          <IconButton onClick={handleClose}>
            <img src={Images.CLOSE} alt={"Close"} />
          </IconButton>
        </div>
       
           
        <div className="doalogBody small">
             <p>Comprehensive breakdown of shift costs, schedule and pricing information for Production Security.</p>
        
        <div className="order_name">
          <div className="order_name_inner in-dialog">
            <div className="icon">
              <figure>
                <img
                  className="listImage"
                  src={Images.USER_IMAGE}
                  alt={""}
                />
              </figure>
            </div>
            <div className="info">
              <h3>Joshua Young</h3>
              <ul>
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
                <div className="commonData">
              <Grid container spacing={2} >
                <Grid size={{xs: 6}}>
                  <p>
                    Regular Time
                  </p>
                  <p className="small">Reg. Rate (12 hrs @ $10/Hr)</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data">12 hrs</p>
                  <p className="dialog-data small">12 hrs</p>
                </Grid>
              </Grid>
               <Grid container spacing={2} >
                <Grid size={{xs: 6}}>
                  <p>OT</p>
                  <p className="small">OT Rate (2 hrs @ 1.5x base rate)</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data">2 Hr</p>
                  <p className=" dialog-data small">$45</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} >
                <Grid size={{xs: 6}}>
                  <p>DT</p>
                  <p className="small">DT Rate (2 hrs @ 1.5x base rate)</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data">4 Hr</p>
                  <p className="dialog-data small">$64</p>
                </Grid>
              </Grid>
                <Grid container spacing={2} >
                <Grid size={{xs: 6}}>
                  <p>Brakes </p>
                  <p className="small">Off-duty (unpaid) breaks</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data">0.5 Hr</p>
                  <p className="dialog-data small">% 29</p>
                </Grid>
              </Grid>
                <Grid container spacing={2} >
                <Grid size={{xs: 6}}>
                  <p className='black'>Total Time </p>
                  <p className="small">Total Cost (Reg Rate + OT Rate + DT Rate)</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data"> 16.5 hrs </p>
                  <p className="dialog-data small">$285</p>
                </Grid>
              </Grid>
           </div>  
         <div className="border_8"></div>
         <div className="commonData">
         <Grid container spacing={2} >
            <Grid size={{xs: 12}}>
                <h3>Additional Charges</h3>
            </Grid>
                <Grid size={{xs: 6}}>
                  <p>Mileage </p>
                  <p className="small">Mileage rate @ $3/mile</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data"> 4</p>
                  <p className="dialog-data small">$8</p>
                </Grid>
              </Grid>
                <Grid container spacing={2} >
                <Grid size={{xs: 6}}>
                  <p>Per Diem</p>
                  <p className="small"></p>
                  <p className="small">Per Diem rate @ $10/unit</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data">2 </p>
                  <p className="dialog-data small">$10</p>
                </Grid>
              </Grid>
                <Grid container spacing={2} >
                <Grid size={{xs: 6}}>
                  <p className="black">Total Price</p>
                </Grid>
                <Grid size={{xs: 6}}>
                  <p className="dialog-data"> $245</p>
                </Grid>
              </Grid>
                <Grid container spacing={2} >
                <Grid size={{xs: 12}}>
                  <p className="note">*Holiday rates applied</p>
                </Grid>
              </Grid>
               </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ShiftDetailPricingDialog;
