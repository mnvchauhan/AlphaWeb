"use client";
import React from "react";
import {
  Box,
  Stack,
  Typography,
  AvatarGroup,
  Avatar,
  Container,
  Grid,
  Button,
  Link,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

let pdf_path = "/Docs/ALPHARESEARCH.pdf";
let pdf_path1 = "/Docs/AlphaResearchPanelBook.pdf";
let pdf_path2 = "/Docs/esomar37df.pdf";


const Frameworks = [
  {
    name: "Mirats",
    icon: "/images/frontend-pages/icons/client_1.png",
  },
  {
    name: "Symmetric",
    icon: "/images/frontend-pages/icons/client_2.png",
  },
  {
    name: "Bilendi & Respondi",
    icon: "/images/frontend-pages/icons/client_3.png",
  },
  {
    name: "Quest Mindshare",
    icon: "/images/frontend-pages/icons/client_4.png",
  },
  {
    name: "Sago",
    icon: "/images/frontend-pages/icons/client_5.png",
  },
];
const Banner = () => {
  //   sidebar
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = (path: string, filename: string) => {
  const link = document.createElement("a");
  link.href = path; // public folder ka path
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <Box bgcolor="primary.light" pt={7}>
      <Container
        sx={{
          maxWidth: "1400px !important",
          position: "relative",
          padding: 10,
        }}
      >
        <Grid container spacing={3} justifyContent="center" mb={4}>
          {lgUp ? (
            <Grid item xs={12} lg={2} alignItems="end" display="flex">
              <Image
                src="/images/frontend-pages/homepage/banner-top-left.png"
                className="animted-img-2"
                alt="banner"
                width={360}
                height={200}
                style={{
                  borderRadius: "16px",
                  position: "absolute",
                  left: "24px",
                  boxShadow: "0px 6px 12px rgba(127, 145, 156, 0.12)",
                  height: "auto",
                  width: "auto",
                }}
              />
            </Grid>
          ) : null}

          <Grid item xs={12} lg={7} textAlign="center">
            <Typography
              variant="h1"
              fontWeight={700}
              lineHeight="1.2"
              sx={{
                fontSize: {
                  xs: "40px",
                  sm: "56px",
                },
              }}
            >
              We're Built on What You{" "}
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "40px",
                    sm: "56px",
                  },
                }}
                fontWeight={700}
                component="span"
                color="primary.main"
              >
                Believe
              </Typography>{" "}
              !
            </Typography>
            <Stack
              my={3}
              direction={{ xs: "column", sm: "row" }}
              spacing="20px"
              alignItems="center"
              justifyContent="center"
            >
              <AvatarGroup>
                <Avatar
                  alt="Remy Sharp"
                  src="/images/profile/user-1.jpg"
                  sx={{ width: 40, height: 40 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/images/profile/user-2.jpg"
                  sx={{ width: 40, height: 40 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/images/profile/user-3.jpg"
                  sx={{ width: 40, height: 40 }}
                />
              </AvatarGroup>
              <Typography variant="h6" fontWeight={500}>
                Alpha Research don't follow trends <b>THEY SET THEM</b>
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={3}
              mb={4}
              justifyContent="center"
            >
              <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={() => handleDownload(pdf_path, "Alpha-Research.pdf")}
              >
                Alpha Research
              </Button>

              <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={() => handleDownload(pdf_path1, "Panel-Book.pdf")}
              >
                Panel Book
              </Button>

              <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={() => handleDownload(pdf_path2, "ESOMAR-37.pdf")}
              >
                ESOMAR PDF
              </Button>
            </Stack>

            <Stack
              direction="row"
              flexWrap="wrap"
              alignItems="center"
              spacing={3}
              mb={8}
              justifyContent="center"
            >
              {Frameworks.map((fw, i) => (
                <Tooltip title={fw.name} key={i}>
                  <Box
                    width="80px"
                    height="80px"
                    display="flex"
                    sx={{
                      boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                          ? null
                          : theme.shadows[10],
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "white" : "white",
                    }}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="16px"
                  >
                    <Image
                      src={fw.icon}
                      alt={fw.icon}
                      width={120}
                      height={50}
                    />
                  </Box>
                </Tooltip>
              ))}

              <Dialog
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>
                  <iframe
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/P94DBd1hJkw?si=WLnH9g-KAdDJkUZN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </Stack>
          </Grid>
          {lgUp ? (
            <Grid item xs={12} lg={2} alignItems="end" display="flex">
              <Image
                src="/images/frontend-pages/homepage/banner-top-right.svg"
                className="animted-img-2"
                alt="banner"
                width={350}
                height={200}
                style={{
                  borderRadius: "16px",
                  position: "absolute",
                  right: "24px",
                  boxShadow: "0px 6px 12px rgba(127, 145, 156, 0.12)",
                  // height: "auto",
                  // width: "auto",
                }}
              />
            </Grid>
          ) : null}
        </Grid>

        {lgUp ? (
          <Image
            src="/images/frontend-pages/homepage/bottom-part-new.svg"
            alt="banner"
            width={500}
            height={300}
            style={{
              width: "100%",
              marginBottom: "-11px",
              borderRadius: "20px",
            }}
          />
        ) : null}
      </Container>
    </Box>
  );
};

export default Banner;
