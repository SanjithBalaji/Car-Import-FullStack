import SubAppBar from "./SubAppBar";
import './style.css';
import React, { Component } from 'react'
import {Grid,Card} from '@mui/material';

export class tax extends Component {
  mystyle={margin:"50px", padding:"50px", textAlign: "right", marginRight: "auto" }
  cardstyle={padding:"50px", width:"760px", margin:"30px",backgroundColor: "rgba(255, 255, 255, 0.55)",borderRadius:"20px" }
  ourstyle={margin:"10px"}
  render() {
    return (
      <>
        <SubAppBar/>  
        <div className="wall-h">
          <Grid style={this.mystyle}>
            <Card elevation={20} align="center" style={this.cardstyle}>
              <ul>
                <li>
                  Basic Customs Duty (BCD): This is the primary import duty levied on cars and is calculated based on the car's assessable value (which includes the cost, insurance, and freight charges). The BCD rates can vary depending on the type of vehicle, its engine capacity, and whether it is new or used. As of September 2021, the BCD rates ranged from 60% to 100% for cars.
                </li>
                <li>
                  Integrated Goods and Services Tax (IGST): IGST is a tax levied on the value of the imported car, including the customs duty and any other applicable charges. The IGST rate for cars in India is typically 28%, but it may vary based on the category of vehicle and any exemptions or concessions.
                </li>
                <li>
                  Additional Customs Duty: Sometimes referred to as the "Countervailing Duty" (CVD) or "Special Additional Duty" (SAD), this duty is calculated on the sum of the car's assessable value and the BCD. The additional customs duty rate is usually 4%.
                </li>
                <li>
                  Other Charges: Apart from the taxes mentioned above, there may be additional charges such as port handling charges, warehouse charges, and any fees associated with the customs clearance process. These charges can vary depending on the port and the logistics service providers involved.
                </li>
                <li>
                  It's worth noting that certain categories of cars, such as electric vehicles (EVs), may be eligible for lower duty rates or exemptions as part of the Indian government's efforts to promote sustainable mobility.
                </li>
                <li>
                  Again, I emphasize the importance of verifying the current tax and duty rates with Indian customs or a qualified professional as the regulations may have changed since my last update.
                </li>
              </ul>
            </Card>
          </Grid>
        </div>
      </>
    );
  }
  
}

export default tax