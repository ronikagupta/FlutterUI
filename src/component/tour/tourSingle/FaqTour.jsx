import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function FaqTour() {
    return (
      <div className="FaqHotel section">
          <div className="container">
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
              Why do we use it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters                </Typography>
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
              Why do we use it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters                </Typography>
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
              Why do we use it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters                </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>

    );
  }

