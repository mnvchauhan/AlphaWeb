'use client';
import React from "react";
import { Grid, Typography } from "@mui/material";

const keys = [
    {
        text: 'Founded',
        title: '2019',
        subtext: 'When we founded Alpha Research',
    },
    {
        text: 'Growth',
        title: '1,400%',
        subtext: 'Revenue growth in 2024',
    },
    {
        text: 'Completes',
        title: '2M+',
        isMargin: true,
        subtext: ' Completes Annually',
    },
    {
        text: 'Active Panel Members',
        title: '500k+',
        isMargin: true,
        subtext: 'Active Penal members at Alpha',
    },
]

const Key = () => {

    return (
        <Grid container spacing={2}>
            {keys.map((key, i) => (
                <Grid item xs={6} sm={6} key={i} sx={{
                    marginTop: {
                        lg: key.isMargin ? '32px' : 0
                    }
                }}>
                    <Typography color="primary.main" textTransform="uppercase" fontSize="13px">{key.text}</Typography>
                    <Typography variant="h4" sx={{
                        fontSize: {
                            xs: '34px', sm: '48px'
                        }
                    }} my={1} lineHeight={1} fontWeight={700} >{key.title}</Typography>
                    <Typography variant="body1">{key.subtext}</Typography>
                </Grid>
            ))}

        </Grid>
    );
};

export default Key;
