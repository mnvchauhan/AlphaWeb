import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  MenuItem,
  Grid,
  Stack,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { IconGridDots } from "@tabler/icons-react";
import DashboardCard from "../../shared/DashboardCard";
import CustomSelect from "../../forms/theme-elements/CustomSelect";
import SkeletonRevenueUpdatesTwoCard from "../skeleton/RevenueUpdatesTwoCard";

interface RevenueupdatestwoCardProps {
  isLoading?: boolean;
}

const RevenueUpdates = ({ isLoading }: RevenueupdatestwoCardProps) => {
  const [month, setMonth] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 360,
      stacked: true,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [
        "12 Jul",
        "13 Jul",
        "14 Jul",
        "15 Jul",
        "16 Jul",
        "17 Jul",
        "18 Jul",
      ],
    },
    yaxis: {
      min: -3,
      max: 5,
      tickAmount: 4,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: "Eanings this month",
      data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0],
    },
    {
      name: "Expense this month",
      data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8],
    },
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonRevenueUpdatesTwoCard />
      ) : (
        <DashboardCard
          title="Revenue Updates"
          subtitle="Overview of Profit"
          action={
            <CustomSelect
              labelId="month-dd"
              id="month-dd"
              size="small"
              value={month}
              onChange={handleChange}
            >
              <MenuItem value={1}>March 2025</MenuItem>
              <MenuItem value={2}>April 2025</MenuItem>
              <MenuItem value={3}>May 2025</MenuItem>
            </CustomSelect>
          }
        >
          <Grid container spacing={3}>
            {/* column */}
            <Grid item xs={12} sm={8}>
              <Box className="rounded-bars">
                <Chart
                  options={optionscolumnchart}
                  series={seriescolumnchart}
                  type="bar"
                  height={360}
                  width={"100%"}
                />
              </Box>
            </Grid>
            {/* column */}
            <Grid item xs={12} sm={4}>
              <Stack spacing={3} mt={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    width={40}
                    height={40}
                    bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography color="primary" variant="h6" display="flex">
                      <IconGridDots size={24} />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" fontWeight="700">
                      $63,489.50
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      Total Earnings
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Stack spacing={3} my={5}>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{
                      width: 9,
                      mt: 1,
                      height: 9,
                      bgcolor: primary,
                      svg: { display: "none" },
                    }}
                  ></Avatar>
                  <Box>
                    <Typography variant="subtitle1" color="textSecondary">
                      Earnings this month
                    </Typography>
                    <Typography variant="h5">$48,820</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{
                      width: 9,
                      mt: 1,
                      height: 9,
                      bgcolor: secondary,
                      svg: { display: "none" },
                    }}
                  ></Avatar>
                  <Box>
                    <Typography variant="subtitle1" color="textSecondary">
                      Expense this month
                    </Typography>
                    <Typography variant="h5">$26,498</Typography>
                  </Box>
                </Stack>
              </Stack>
              <Button color="primary" variant="contained" fullWidth>
                View Full Report
              </Button>
            </Grid>
          </Grid>
        </DashboardCard>
      )}
    </>
  );
};

export default RevenueUpdates;

// import React from "react";
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import { useTheme } from "@mui/material/styles";
// import {
//   MenuItem,
//   Grid,
//   Stack,
//   Typography,
//   Button,
//   Avatar,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import { IconGridDots } from "@tabler/icons-react";
// import DashboardCard from "../../shared/DashboardCard";
// import CustomSelect from "../../forms/theme-elements/CustomSelect";
// import SkeletonRevenueUpdatesTwoCard from "../skeleton/RevenueUpdatesTwoCard";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { Db } from "@/firebase";

// interface RevenueupdatestwoCardProps {
//   isLoading?: boolean;
// }

// const RevenueUpdates = ({ isLoading }: RevenueupdatestwoCardProps) => {
//   const theme = useTheme();
//   const primary = theme.palette.primary.main;
//   const secondary = theme.palette.secondary.main;

//   const [month, setMonth] = React.useState<string>("");
//   const [monthsList, setMonthsList] = React.useState<
//     { label: string; value: string }[]
//   >([]);

//   const [surveyData, setSurveyData] = React.useState<any[]>([]);
//   const [statusCounts, setStatusCounts] = React.useState({
//     "111": 0,
//     "222": 0,
//     "333": 0,
//     "444": 0,
//   });

//   const [loadingData, setLoadingData] = React.useState<boolean>(true);

//   // ✅ Generate months dynamically
//   React.useEffect(() => {
//     const now = new Date();
//     const year = now.getFullYear();
//     const temp: { label: string; value: string }[] = [];

//     for (let m = 0; m <= now.getMonth(); m++) {
//       const date = new Date(year, m, 1);
//       const label = date.toLocaleString("default", {
//         month: "long",
//         year: "numeric",
//       }); // July 2025
//       const value = `${year}-${String(m + 1).padStart(2, "0")}`;
//       temp.push({ label, value });
//     }

//     setMonthsList(temp.reverse());

//     // Default -> current month
//     const currentMonthValue = `${year}-${String(now.getMonth() + 1).padStart(
//       2,
//       "0"
//     )}`;
//     setMonth(currentMonthValue);
//   }, []);

//   // ✅ Fetch Firestore data for selected month
//   React.useEffect(() => {
//     if (!month) return;
//     setLoadingData(true);

//     const fetchMonthData = async () => {
//       try {
//         const [year, mm] = month.split("-");
//         const monthStart = new Date(
//           parseInt(year),
//           parseInt(mm) - 1,
//           1,
//           0,
//           0,
//           0
//         );
//         const monthEnd = new Date(parseInt(year), parseInt(mm), 0, 23, 59, 59);

//         const surveysRef = collection(Db, "pols");
//         const q = query(
//           surveysRef,
//           where("timestamp", ">=", monthStart),
//           where("timestamp", "<=", monthEnd)
//         );

//         const snapshot = await getDocs(q);
//         const data = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setSurveyData(data);

//         // ✅ Count statuses
//         const counts = { "111": 0, "222": 0, "333": 0, "444": 0 };
//         data.forEach((item: any) => {
//           if (item.status && counts[item.status] !== undefined) {
//             counts[item.status]++;
//           }
//         });
//         setStatusCounts(counts);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoadingData(false);
//       }
//     };

//     fetchMonthData();
//   }, [month]);

//   const totalSurveys = surveyData.length;

//   // ✅ Chart options & series are **always defined**
//   const optionscolumnchart: any = {
//     chart: {
//       type: "bar",
//       fontFamily: "'Plus Jakarta Sans', sans-serif;",
//       foreColor: "#adb0bb",
//       toolbar: { show: true },
//       height: 360,
//       stacked: true,
//     },
//     colors: [
//       theme.palette.success.main, // Completed
//       theme.palette.error.main, // Disqualified
//       theme.palette.primary.main, // Quota full
//       theme.palette.warning.main, // Others
//     ],
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         barHeight: "60%",
//         columnWidth: "20%",
//         borderRadius: [6],
//         borderRadiusApplication: "end",
//         borderRadiusWhenStacked: "all",
//       },
//     },
//     dataLabels: { enabled: false },
//     legend: { show: false },
//     grid: {
//       borderColor: "rgba(0,0,0,0.1)",
//       strokeDashArray: 3,
//       xaxis: { lines: { show: false } },
//     },
//     xaxis: {
//       categories: ["Completed", "Disqualified", "Quota Full", "Others"],
//     },
//     yaxis: { min: 0, tickAmount: 4 },
//     tooltip: {
//       shared: false,
//       intersect: false,
//       theme: theme.palette.mode === "dark" ? "dark" : "light",
//       fillSeriesColor: false,
//     },
//   };

//   const seriescolumnchart = [
//     {
//       name: "Surveys",
//       data: [
//         statusCounts["111"] || 0,
//         statusCounts["222"] || 0,
//         statusCounts["333"] || 0,
//         statusCounts["444"] || 0,
//       ],
//     },
//   ];

//   return (
//     <>
//       {isLoading ? (
//         <SkeletonRevenueUpdatesTwoCard />
//       ) : (
//         <DashboardCard
//           title="Survey Status Overview"
//           subtitle="Survey status distribution by month"
//           action={
//             <CustomSelect
//               labelId="month-dd"
//               id="month-dd"
//               size="small"
//               value={month}
//               onChange={(e) => setMonth(e.target.value)}
//             >
//               {monthsList.map((m) => (
//                 <MenuItem key={m.value} value={m.value}>
//                   {m.label}
//                 </MenuItem>
//               ))}
//             </CustomSelect>
//           }
//         >
//           {loadingData ? (
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: 300,
//               }}
//             >
//               <CircularProgress />
//             </Box>
//           ) : (
//             <Grid container spacing={3}>
//               {/* column - chart */}
//               <Grid item xs={12} sm={8}>
//                 <Box className="rounded-bars">
//                   <Chart
//                     options={optionscolumnchart}
//                     series={seriescolumnchart}
//                     type="bar"
//                     height={360}
//                     width={"100%"}
//                   />
//                 </Box>
//               </Grid>

//               {/* column - summary */}
//               <Grid item xs={12} sm={4}>
//                 <Stack spacing={3} mt={3}>
//                   <Stack direction="row" spacing={2} alignItems="center">
//                     <Box
//                       width={40}
//                       height={40}
//                       bgcolor="primary.light"
//                       display="flex"
//                       alignItems="center"
//                       justifyContent="center"
//                     >
//                       <Typography color="primary" variant="h6" display="flex">
//                         <IconGridDots size={24} />
//                       </Typography>
//                     </Box>
//                     <Box>
//                       <Typography variant="h3" fontWeight="700">
//                         {totalSurveys} Surveys
//                       </Typography>
//                       <Typography variant="subtitle2" color="textSecondary">
//                         in {monthsList.find((m) => m.value === month)?.label}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                 </Stack>

//                 {/* Status counts */}
//                 <Stack spacing={3} my={5}>
//                   <Stack direction="row" spacing={2}>
//                     <Avatar
//                       sx={{
//                         width: 9,
//                         mt: 1,
//                         height: 9,
//                         bgcolor: theme.palette.success.main,
//                       }}
//                     />
//                     <Box>
//                       <Typography variant="subtitle1" color="textSecondary">
//                         Completed (111)
//                       </Typography>
//                       <Typography variant="h5">
//                         {statusCounts["111"]}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                   <Stack direction="row" spacing={2}>
//                     <Avatar
//                       sx={{
//                         width: 9,
//                         mt: 1,
//                         height: 9,
//                         bgcolor: theme.palette.error.main,
//                       }}
//                     />
//                     <Box>
//                       <Typography variant="subtitle1" color="textSecondary">
//                         Disqualified (222)
//                       </Typography>
//                       <Typography variant="h5">
//                         {statusCounts["222"]}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                   <Stack direction="row" spacing={2}>
//                     <Avatar
//                       sx={{
//                         width: 9,
//                         mt: 1,
//                         height: 9,
//                         bgcolor: theme.palette.primary.main,
//                       }}
//                     />
//                     <Box>
//                       <Typography variant="subtitle1" color="textSecondary">
//                         Quota Full (333)
//                       </Typography>
//                       <Typography variant="h5">
//                         {statusCounts["333"]}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                   <Stack direction="row" spacing={2}>
//                     <Avatar
//                       sx={{
//                         width: 9,
//                         mt: 1,
//                         height: 9,
//                         bgcolor: theme.palette.warning.main,
//                       }}
//                     />
//                     <Box>
//                       <Typography variant="subtitle1" color="textSecondary">
//                         Others (444)
//                       </Typography>
//                       <Typography variant="h5">
//                         {statusCounts["444"]}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                 </Stack>

//                 <Button color="primary" variant="contained" fullWidth>
//                   View Full Report
//                 </Button>
//               </Grid>
//             </Grid>
//           )}
//         </DashboardCard>
//       )}
//     </>
//   );
// };

// export default RevenueUpdates;
