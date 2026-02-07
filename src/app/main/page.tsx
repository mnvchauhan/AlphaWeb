"use client";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

import PageContainer from "@/components/container/PageContainer";
// components
import YearlyBreakup from "@/components/dashboards/modern/YearlyBreakup";
import MonthlyEarnings from "@/components/dashboards/modern/MonthlyEarnings";
import RevenueUpdates from "@/components/dashboards/modern/RevenueUpdates";
import EmployeeSalary from "@/components/dashboards/modern/EmployeeSalary";
import Customers from "@/components/dashboards/modern/Customers";
import Projects from "@/components/dashboards/modern/Projects";
import Social from "@/components/dashboards/modern/Social";
import SellingProducts from "@/components/dashboards/modern/SellingProducts";
import WeeklyStats from "@/components/dashboards/modern/WeeklyStats";
import TopPerformers from "@/components/dashboards/modern/TopPerformers";
import TablePagination from "../../components/react-table/TablePagination";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import Header from "../(DashboardLayout)/layout/vertical/header/Header";
import Customizer from "../(DashboardLayout)/layout/shared/customizer/Customizer";
import Navigation from "../(DashboardLayout)/layout/horizontal/navbar/Navigation";
import HorizontalHeader from "../(DashboardLayout)/layout/horizontal/header/Header";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import Sidebar from "../(DashboardLayout)/layout/vertical/sidebar/Sidebar";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
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

export default function Main() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <MainWrapper
      className={
        customizer.activeMode === "dark" ? "darkbg mainwrapper" : "mainwrapper"
      }
    >
      <title>Modernize NextJs</title>
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      {customizer.isHorizontal ? "" : <Sidebar />}
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper
        className="page-wrapper"
        sx={{
          ...(customizer.isCollapse && {
            [theme.breakpoints.up("lg")]: {
              ml: `${customizer.MiniSidebarWidth}px`,
            },
          }),
        }}
      >
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        {customizer.isHorizontal ? <HorizontalHeader /> : <Header />}
        {/* PageContent */}
        {customizer.isHorizontal ? <Navigation /> : ""}
        <Container
          sx={{
            pt: "30px",
            maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",
          }}
        >
          {/* ------------------------------------------- */}
          {/* PageContent */}
          {/* ------------------------------------------- */}

          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            {/* <Outlet /> */}
            <PageContainer title="Dashboard" description="this is Dashboard">
              <Box mt={3}>
                <Grid container spacing={3}>
                  {/* column */}
                  {/* <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid> */}
                  <TablePagination />
                  <Grid item xs={12} lg={8}>
                    <RevenueUpdates isLoading={isLoading} />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} lg={12}>
                        <YearlyBreakup isLoading={isLoading} />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={12}>
                        <MonthlyEarnings isLoading={isLoading} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <EmployeeSalary isLoading={isLoading} />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Customers isLoading={isLoading} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Projects isLoading={isLoading} />
                      </Grid>
                      <Grid item xs={12}>
                        <Social />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <SellingProducts />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <WeeklyStats isLoading={isLoading} />
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <TopPerformers />
                  </Grid>
                </Grid>
              </Box>
            </PageContainer>
            {/* <Index /> */}
          </Box>

          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Container>
        <Customizer />
      </PageWrapper>
    </MainWrapper>
  );
}
