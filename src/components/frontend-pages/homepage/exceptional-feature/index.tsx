"use client";
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import CommuteIcon from "@mui/icons-material/Commute";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MmsIcon from "@mui/icons-material/Mms";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AssignmentIcon from "@mui/icons-material/Assignment";
const StyledAnimationFeature = styled(Box)(() => ({
  width: "100%",
  overflowX: "hidden",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const StyledAnimationContent = styled(Box)(() => ({
  animation: "marquee 25s linear infinite",
}));

const StyledAnimationContent2 = styled(Box)(() => ({
  animation: "marquee2 25s linear infinite",
}));

const slide1 = [
  {
    icon: <AssuredWorkloadIcon color="primary" />,
    text: "Financial Service",
  },
  {
    icon: <CommuteIcon color="primary" />,
    text: "Automotive and Mobility",
  },
  {
    icon: <StorefrontIcon color="primary" />,
    text: "Retail and Ecommerce",
  },
  {
    icon: <ReduceCapacityIcon color="primary" />,
    text: "Social and Public Sectors",
  },
  {
    icon: <VpnLockIcon color="primary" />,
    text: "Technology and Electronics",
  },
  {
    icon: <PrecisionManufacturingIcon color="primary" />,
    text: "Advance Manufacturing",
  },
  {
    icon: <ElectricBoltIcon color="primary" />,
    text: "Energy and Natural Resources",
  },
  {
    icon: <HealthAndSafetyIcon color="primary" />,
    text: "Health Care and Insurance",
  },
  {
    icon: <PermMediaIcon color="primary" />,
    text: "Digital Media",
  },
  {
    icon: <MmsIcon color="primary" />,
    text: "Entertainment",
  },
];

const slide2 = [
  {
    icon: <CardMembershipIcon color="primary" />,
    text: "Esomar",
  },
  {
    icon: <CardMembershipIcon color="primary" />,
    text: "ISO 9001:2015",
  },
  {
    icon: <CardMembershipIcon color="primary" />,
    text: "ISO 20252:2019",
  },
  {
    icon: <CardMembershipIcon color="primary" />,
    text: "Insights Association",
  },
  {
    icon: <CardMembershipIcon color="primary" />,
    text: "PAIR",
  },
  {
    icon: <CardMembershipIcon color="primary" />,
    text: "MRSI",
  },
  {
    icon: <CardMembershipIcon color="primary" />,
    text: "Green Book",
  },
];

const slide3 = [
  {
    icon: <AssignmentIcon color="primary" />,
    text: "Mirats",
  },
  {
    icon: <AssignmentIcon color="primary" />,
    text: "SAGO",
  },
  {
    icon: <AssignmentIcon color="primary" />,
    text: "Global Survey",
  },
  {
    icon: <AssignmentIcon color="primary" />,
    text: "Question Lab",
  },
  {
    icon: <AssignmentIcon color="primary" />,
    text: "Azure",
  },
  {
    icon: <AssignmentIcon color="primary" />,
    text: "CCR",
  },
  {
    icon: <AssignmentIcon color="primary" />,
    text: "Data Spring",
  },
  {
    icon: <AssignmentIcon color="primary" />,
    text: "Kaspersky",
  },
];

const ExceptionalFeature = () => {
  const theme = useTheme();

  const StyledFeatureBox = styled(Box)(() => ({
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.background.default,
    minHeight: "72px",
    width: "315px",
    borderRadius: "16px",
    marginTop: "15px",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexShrink: 0,
  }));

  return (
    <>
      <Container
        sx={{
          maxWidth: "1400px !important",
        }}
        style={{ marginBottom: 55 }}
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
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} lg={7} sm={9}>
                <Typography
                  variant="h4"
                  mb="55px"
                  textAlign="center"
                  fontWeight={700}
                  fontSize="40px"
                  lineHeight="1.2"
                  sx={{
                    fontSize: {
                      lg: "40px",
                      xs: "30px",
                    },
                  }}
                >
                  Industries we serve deeply
                </Typography>
              </Grid>
            </Grid>
          </Container>

          <StyledAnimationFeature>
            <StyledAnimationContent display="flex" gap="30px">
              {slide1.map((slide, i) => (
                <StyledFeatureBox key={i}>
                  {slide.icon}
                  {/* <Image src={slide.icon} alt="color" width={24} height={24} /> */}
                  <Typography fontSize="15px" fontWeight={600}>
                    {slide.text}
                  </Typography>
                </StyledFeatureBox>
              ))}
            </StyledAnimationContent>
          </StyledAnimationFeature>

          <StyledAnimationFeature>
            <StyledAnimationContent2 display="flex" gap="30px">
              {slide2.map((slide, i) => (
                <StyledFeatureBox key={i}>
                  {/* <Image src={slide.icon} alt="color" width={24} height={24} /> */}
                  {slide.icon}

                  <Typography fontSize="15px" fontWeight={600}>
                    {slide.text}
                  </Typography>
                </StyledFeatureBox>
              ))}
            </StyledAnimationContent2>
          </StyledAnimationFeature>

          <StyledAnimationFeature>
            <StyledAnimationContent display="flex" gap="30px">
              {slide3.map((slide, i) => (
                <StyledFeatureBox key={i}>
                  {/* <Image src={slide.icon} alt="color" width={24} height={24} /> */}
                  {slide.icon}

                  <Typography fontSize="15px" fontWeight={600}>
                    {slide.text}
                  </Typography>
                </StyledFeatureBox>
              ))}
            </StyledAnimationContent>
          </StyledAnimationFeature>
        </Box>
      </Container>
    </>
  );
};

export default ExceptionalFeature;
