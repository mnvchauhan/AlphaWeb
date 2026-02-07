"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Header from "./layout/vertical/header/Header";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Customizer from "./layout/shared/customizer/Customizer";
import Navigation from "./layout/horizontal/navbar/Navigation";
import HorizontalHeader from "./layout/horizontal/header/Header";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import HomePage from "../home/page";

const MainWrapper = styled("div")(() => ({
  // display: "flex",
  // minHeight: "100vh",
  // width: "100%",
  // background: "red",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();

  return (
    <MainWrapper
      className={
        customizer.activeMode === "dark" ? "darkbg mainwrapper" : "mainwrapper"
      }
    >
      <title>Modernize NextJs</title>
      <HomePage />
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      {/* {customizer.isHorizontal ? "" : <Sidebar />} */}
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
    </MainWrapper>
  );
}
