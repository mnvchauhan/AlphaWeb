'use client';
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

const Banner = () => {

    return (
        <>
            <Box bgcolor="primary.light" sx={{
                paddingTop: {
                    xs: '40px',
                    lg: '100px',
                },
                paddingBottom: {
                    xs: '40px',
                    lg: '200px',
                }
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} lg={8} alignItems="center" textAlign="center">
                            <Typography color="primary.main" textTransform="uppercase" fontSize="13px">Contact us</Typography>
                            <Typography variant="h1" mb={3} lineHeight={1.4} fontWeight={700} sx={{
                                fontSize: {
                                    xs: '34px', sm: '48px', lg: '56px'
                                }
                            }}>We'd love to hear from you</Typography>
                        </Grid>
                    </Grid>

                </Container>

            </Box>
            <Box sx={{
                mt: {
                    lg: '-150px'
                }
            }}>
                <Container maxWidth="lg">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.725586285082!2d77.37820554831416!3d28.63084223443708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff8fa9e5939%3A0x344f1ab709b162d5!2sBlock%20H%2C%20H-009%2C%20Hapur%20Bypass%20Road%2C%20H%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e1!3m2!1sen!2sin!4v1769797770001!5m2!1sen!2sin" width="100%" height="440" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>

                    {/* <Image src="/images/frontend-pages/contact/map.jpg" alt="map" width={1218} height={440} style={{ borderRadius: '16px', width: '100%', height: 'auto' }} /> */}
                </Container>
            </Box>
        </>
    );
};

export default Banner;
