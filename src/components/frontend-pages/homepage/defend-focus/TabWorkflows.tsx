"use client";
import * as React from "react";
import {
  Box,
  Divider,
  Typography,
  Grid,
  Button,
  ListItem,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import { useState } from "react";

const StyledAccordian = styled(Accordion)(() => ({
  boxShadow: "none",
  marginBottom: "0 !important",
  "&.Mui-expanded": {
    margin: "0",
  },
  "& .MuiAccordionSummary-root": {
    padding: 0,
    minHeight: "60px",
  },
  "& .MuiAccordionDetails-root": {
    padding: "0 0 20px",
  },
}));

const TabWorkflows = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const handleChange2 = () => {
    setExpanded(!expanded);
  };

  const handleChange3 = () => {
    setExpanded2(!expanded2);
  };

  const handleChange4 = () => {
    setExpanded3(!expanded3);
  };
  const handleChange5 = () => {
    setExpanded4(!expanded4);
  };

  return (
    <Grid container spacing={{ xs: 3, lg: 8 }}>
      <Grid item xs={12} lg={6}>
        <Image
          src="/images/frontend-pages/homepage/accordian_four.svg"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: 500,
            objectFit: "contain",
          }}
          alt="img"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              lg: "40px",
              xs: "35px",
            },
          }}
          fontWeight="700"
          lineHeight={1.2}
        >
          Explore the service of Sampling Solution
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              lg: "16px",
              xs: "12px",
            },
          }}
          fontWeight="500"
          mt={5}
        >
          Our market research expertise provides reliable data trusted by top
          consultancies, financial institutions, and leading research firms.
        </Typography>
        <Box mt={4}>
          <StyledAccordian expanded={expanded2} onChange={handleChange3}>
            <AccordionSummary
              expandIcon={
                expanded2 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Strategic Planning
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Crafting tailored research methodologies</li>
                <li>Global participant recruitment across diverse markets</li>
                <li>Development of culturally relevant screeners</li>
                <li>Custom interview guide creation</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded} onChange={handleChange2}>
            <AccordionSummary
              expandIcon={
                expanded ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Implementation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Moderation of in-depth interviews across global regions</li>
                <li>High-quality call recordings</li>
                <li>Accurate transcription services</li>
                <li>Translation and localization for multi-language studies</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded3} onChange={handleChange4}>
            <AccordionSummary
              expandIcon={
                expanded3 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Data Interpretation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Expert analysis and synthesis of global insights</li>
                <li>Identifying regional trends and consumer behaviors</li>
                <li>Actionable findings aligned with client objectives</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded4} onChange={handleChange5}>
            <AccordionSummary
              expandIcon={
                expanded4 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Report Generation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Timely interim interview summaries</li>
                <li>Executive-level summary reports</li>
                <li>Full-length, presentation-ready deliverables</li>
                <li>Detailed analysis and visual storytelling</li>
                <li>Evidence-based conclusions and hypothesis testing</li>
                <li>Custom branding and client-specific formatting</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <Box mt={3}>
            <Button variant="contained" color="primary" size="large">
              Learn More
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default TabWorkflows;
