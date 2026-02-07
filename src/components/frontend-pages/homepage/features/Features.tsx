"use client";
import React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import Image from "next/image";
import FeatureTitle from "./FeatureTitle";

const Features = () => {
  return (
    <Box pt={10} pb={10}>
      <Container maxWidth="lg">
        <FeatureTitle />

        <Grid container spacing={3} mt={3}>
          <Grid item xs sm={6} lg>
            <Box mb={3} bgcolor="warning.light" borderRadius="24px">
              <Box px={4} py="65px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Box textAlign="center">
                    <Image
                      src="/images/svgs/icon-briefcase.svg"
                      alt="icon1"
                      width={40}
                      height={40}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={700}>
                    Ethnographic Research
                  </Typography>
                  <Typography variant="body1">
                    Uncover deep consumer behaviors, segments, and innovation
                    through observation.
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Box
              textAlign="center"
              mb={3}
              bgcolor="secondary.light"
              borderRadius="24px"
            >
              <Box px={4} py="50px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Typography variant="h6" fontWeight={700}>
                    Focus Groups
                  </Typography>
                  <Typography variant="body1">
                    {" "}
                    Engage participants in guided discussions to extract layered
                    insights.
                  </Typography>
                </Stack>
              </Box>
              <Box height="70px">
                <Image
                  src="/images/frontend-pages/homepage/feature-apps.png"
                  alt="icon1"
                  width={250}
                  height={70}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              order: {
                xs: 3,
                lg: 2,
              },
            }}
          >
            <Box
              textAlign="center"
              mb={3}
              bgcolor="primary.light"
              borderRadius="24px"
            >
              <Box pt="65px" pb="40px" px={5}>
                <Image
                  src="/images/logos/logo.svg"
                  alt="logo"
                  height="200"
                  width="200"
                />
                <Typography
                  variant="h2"
                  fontWeight="700"
                  mt={4}
                  sx={{
                    fontSize: {
                      lg: "30px",
                      xs: "25px",
                    },
                  }}
                >
                  We unlock directions
                </Typography>
                <Typography variant="body1" mt={2}>
                  Empowering brands with insights that drive clarity,
                  confidence, and results.
                </Typography>
                <Box mt={5} mb={2}>
                  <Image
                    src="/images/frontend-pages/homepage/screen1.png"
                    alt="icon1"
                    width={405}
                    height={245}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs
            sm={6}
            lg
            sx={{
              order: {
                xs: 2,
                lg: 3,
              },
            }}
          >
            <Box
              textAlign="center"
              mb={3}
              bgcolor="success.light"
              borderRadius="24px"
            >
              <Box px={4} py="65px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Box textAlign="center">
                    <Image
                      src="/images/svgs/icon-speech-bubble.svg"
                      alt="icon1"
                      width={40}
                      height={40}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={700}>
                    Online Discussions
                  </Typography>
                  <Typography variant="body1">
                    {" "}
                    Gather flexible, thoughtful feedback over days in digital
                    environments.
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Box
              textAlign="center"
              mb={3}
              bgcolor="error.light"
              borderRadius="24px"
            >
              <Box px={4} py="65px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Box textAlign="center">
                    <Image
                      src="/images/svgs/icon-favorites.svg"
                      alt="icon1"
                      width={40}
                      height={40}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={700}>
                    In-Depth Interviews (IDIs)
                  </Typography>
                  <Typography variant="body1">
                    {" "}
                    Explore personal experiences through one-on-one, real-time
                    qualitative conversations.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
