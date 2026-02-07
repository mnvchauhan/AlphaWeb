"use client";
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import DozensCarousel from "./DozensCarousel";

const features = [
  {
    title: "Actionable Insights",
    subtext:
      "We transform complex data into clear, strategic recommendations that drive smarter business decisions.",
  },
  {
    title: "Global Reach",
    subtext:
      "Access to diverse audiences across regions, industries, and demographics for truly representative insights.",
  },
  {
    title: "End-to-End Research Solutions",
    subtext:
      "From survey design to final reporting, we manage the full research lifecycle with accuracy and reliability.",
  },
];

const PowerfulDozens = () => {
  return (
    <>
      <Container
        sx={{
          maxWidth: "1400px !important",
          mt: {
            xs: "40px",
            lg: "90px",
          },
        }}
      >
        <Box
          bgcolor="primary.light"
          borderRadius="24px"
          sx={{
            py: {
              xs: "40px",
              lg: "70px",
            },
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6} sm={9}>
                <Typography
                  variant="h4"
                  mb="15px"
                  fontWeight={700}
                  fontSize="40px"
                  lineHeight="1"
                  sx={{
                    fontSize: {
                      lg: "40px",
                      xs: "35px",
                    },
                  }}
                >
                  "Data is the footprint,
                </Typography>
                <Typography
                  variant="h4"
                  mb="55px"
                  fontWeight={700}
                  fontSize="40px"
                  lineHeight="1"
                  sx={{
                    fontSize: {
                      lg: "40px",
                      xs: "35px",
                    },
                  }}
                >
                  Insight is the destination"
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <DozensCarousel />
          <Container maxWidth="lg">
            <Grid container spacing={3} mt={5}>
              {features.map((feature, i) => (
                <Grid item xs={12} lg={4} sm={4} textAlign="center" key={i}>
                  <Typography
                    variant="h4"
                    mb="16px"
                    fontWeight={700}
                    sx={{
                      fontSize: {
                        xs: "17px",
                      },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" lineHeight="28px">
                    {feature.subtext}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default PowerfulDozens;
