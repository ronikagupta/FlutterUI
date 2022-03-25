import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function FaqHotel() {
    return (
      <div className="FaqHotel section">
        <h4 className="title">Frequently asked questions</h4>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              How do I get to Gypsys 2BHK Apartment?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>For those who wish to drive their own cars, Gypsys 2BHK Apartment has a car park available for guests. Parking is free for guests.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              How do I get to Gypsys 2BHK Apartment?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>For those who wish to drive their own cars, Gypsys 2BHK Apartment has a car park available for guests. Parking is free for guests.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              How do I get to Gypsys 2BHK Apartment?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>For those who wish to drive their own cars, Gypsys 2BHK Apartment has a car park available for guests. Parking is free for guests.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

