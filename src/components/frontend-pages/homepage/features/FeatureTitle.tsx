"use client";
import React from "react";
import { Box, Grid, Typography, Link, Chip } from "@mui/material";

const FeatureTitle = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} lg={6} textAlign="center">
        <Typography
          variant="body1"
          fontWeight={700}
          fontSize={25}
          lineHeight={1.2}
        >
          "We don't just analyze data, we accelerate decisions"
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeatureTitle;
