"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { IconMenu2, IconSun, IconMoon } from "@tabler/icons-react";

import Navigations from "./Navigations";
import MobileSidebar from "./MobileSidebar";

import Image from "next/image";
import Link from "next/link";

// import { useThemeMode } from "@/context/ThemeContext";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("lg")]: {
    minHeight: "100px",
  },
  backgroundColor: theme.palette.primary.light,
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  color: theme.palette.text.secondary,
  justifyContent: "space-between",
}));

const HpHeader = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));

  // const { mode, toggleTheme } = useThemeMode();

  const [open, setOpen] = React.useState(false);

  return (
    <AppBarStyled position="sticky" elevation={0}>
      <Container sx={{ maxWidth: "1400px !important" }}>
        <ToolbarStyled>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logos/logo.svg"
              alt="logo"
              width={100}
              height={150}
              priority
              style={{ cursor: "pointer" }}
            />
          </Link>

          {/* Mobile Menu */}
          {lgDown && (
            <IconButton onClick={() => setOpen(true)}>
              <IconMenu2 size={20} />
            </IconButton>
          )}

          {/* Desktop Navigation */}
          {lgUp && (
            <Stack direction="row" spacing={2} alignItems="center">
              <Navigations />

              {/* Theme Toggle */}
              {/* <IconButton onClick={toggleTheme}>
                {mode === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
              </IconButton> */}

              <Button
                color="primary"
                variant="contained"
                href="https://alpharesearchsurvey.site/login"
              >
                Log In
              </Button>
            </Stack>
          )}
        </ToolbarStyled>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 270,
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        {/* <Stack direction="row" justifyContent="flex-end" p={1}>
          <IconButton onClick={toggleTheme}>
            {mode === "dark" ? <IconSun /> : <IconMoon />}
          </IconButton>
        </Stack> */}

        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
};

export default HpHeader;

