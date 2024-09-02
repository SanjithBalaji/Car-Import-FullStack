import SubAppBar from "./SubAppBar";
import './style.css';
import React, { Component } from 'react'
import {Grid,Card} from '@mui/material';

export class rules extends Component {
  mystyle={margin:"50px", padding:"20px", textAlign: "right", marginRight: "auto" }
  cardstyle={padding:"50px", width:"950px", margin:"30px",backgroundColor: "rgba(255, 255, 255, 0.55)",borderRadius:"20px" }
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
                  Research Import Regulations: Familiarize yourself with the import regulations and policies set by the Government of India, specifically the Ministry of Commerce and Industry, the Directorate General of Foreign Trade (DGFT), and the Central Board of Indirect Taxes and Customs (CBIC). Ensure you meet all the eligibility criteria and comply with the necessary documentation requirements.
                </li>
                <li>
                  Choose a Shipping Method: Decide whether you want to import the car by sea or air. Shipping by sea is generally more cost-effective, but it takes longer, whereas air freight is faster but more expensive.
                </li>
                <li>
                  Obtain Import License: Apply for an import license from the DGFT if required, based on the specific rules governing vehicle imports at the time. The import license ensures compliance with the Indian government's policies and regulations.
                </li>
                <li>
                  Choose a Customs Port: Select the Indian port through which you wish to import your car. Ensure that the port has customs clearance facilities for imported vehicles.
                </li>
                <li>
                  Find a Customs Broker: Engage the services of a licensed customs broker or clearing agent in India. They will guide you through the customs clearance process, complete the required documentation, and handle the customs formalities on your behalf.
                </li>
                <li>
                  Prepare Documentation: Collect all the necessary documentation, which may include the following:
                  <ul>
                    <li>Purchase invoice from the seller abroad.</li>
                    <li>Bill of Lading/Airway Bill.</li>
                    <li>Import license (if applicable).</li>
                    <li>Insurance documents.</li>
                    <li>Original vehicle registration documents from the country of origin.</li>
                    <li>Original passport and visa of the importer.</li>
                    <li>Manufacturer's certificate and compliance documents, such as emission standards, safety regulations, etc.</li>
                    <li>No Objection Certificate (NOC) from the manufacturer, if needed.</li>
                  </ul>
                </li>
                <li>
                  Pay Customs Duties and Taxes: Importing a car into India attracts customs duties, taxes, and fees. Calculate and prepare the payment for the applicable customs duties, goods and services tax (GST), and any other levies. Customs officials will assess the duties based on the car's value, type, engine capacity, and other factors.
                </li>
                <li>
                  Customs Clearance: Submit the completed documentation to the customs broker or clearing agent at the chosen port. They will process the customs clearance, paying the duties on your behalf, and ensuring compliance with all customs procedures.
                </li>
                <li>
                  Vehicle Inspection and Testing: After customs clearance, the vehicle may undergo inspections, emissions testing, or any other required tests conducted by the relevant authorities.
                </li>
              </ul>
            </Card>
          </Grid>
        </div>
      </>
    );
  }
  
} 

export default rules