"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Db } from "@/firebase";
import DashboardCard from "@/components/shared/DashboardCard";
import moment from "moment";
import PageContainer from "@/components/container/PageContainer";
import HeaderAlert from "@/components/frontend-pages/shared/header/HeaderAlert";
import HpHeader from "@/components/frontend-pages/shared/header/HpHeader";

interface PolDataType {
  id: string;
  data: {
    status?: string;
    ip?: string;
    country?: string;
    pid?: string;
    uid: string;
    timestamp: any;
  };
}

const Ending = () => {
  const searchParams = useSearchParams();
  const pid = searchParams.get("pid");
  const status = searchParams.get("st") ?? "";
  const uid = searchParams.get("uid");

  const [polData, setPolData] = useState<PolDataType[]>([]);
  const [ip, setIp] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  // Fetch all pol data (for duplicate check)
  const fetchPolData = () => {
    const q = query(collection(Db, "pols"), orderBy("timestamp", "desc"));
    return onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })) as PolDataType[];
      setPolData(list);
    });
  };

  // Fetch IP + Country
  const getMyIp = async () => {
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json").then(
        (res) => res.json()
      );
      setIp(ipRes?.ip || "");

      const countryRes = await fetch("https://api.country.is/").then((res) =>
        res.json()
      );
      setCountry(countryRes?.country || "");
    } catch (err) {
      console.error("Problem fetching IP/Country", err);
    }
  };

  // Save survey result to Firestore (only if not already saved)
  const addPolDetails = async () => {
    const exists = polData.find((e) => e?.data?.uid === uid);

    if (!exists && pid && uid && status) {
      try {
        await addDoc(collection(Db, "pols"), {
          pid,
          uid,
          status,
          ip: ip ?? "",
          country: country ?? "",
          timestamp: serverTimestamp(),
        });
        console.log("✅ Survey details added:", { pid, uid, status });
      } catch (error) {
        console.error("❌ Error adding document:", error);
      }
    } else {
      console.log("⏩ Already exists or missing fields");
    }
  };

  useEffect(() => {
    const unsub = fetchPolData();
    getMyIp();
    return () => unsub(); // cleanup listener
  }, []);

  useEffect(() => {
    if (polData.length > 0) {
      addPolDetails();
    }
  }, [polData, pid, uid, status, ip, country]);

  const statusText = status.includes("1")
    ? "Completed ✅"
    : status.includes("2")
    ? "Disqualified ❌"
    : status.includes("3")
    ? "Quota Full ⚠️"
    : "Unknown";

  // Prepare data for table
  const currentRow = {
    pid: pid ?? "-",
    uid: uid ?? "-",
    status: statusText,
    ip: ip || "-",
    country: country || "-",
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm:ss"),
  };

  return (
    <PageContainer title="Homepage" description="this is Homepage">
      <HeaderAlert />
      <HpHeader />
      <DashboardCard title="Survey Completion">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <Image
                src={"/images/frontend-pages/homepage/accordian_One.svg"}
                alt="Survey Completed"
                width={350}
                height={250}
              />
            </Box>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={8}>
            <Card sx={{ textAlign: "center", p: 4 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  🎉 Thank you for completing the survey!
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mt: 2, mb: 3 }}
                >
                  Your survey status: <strong>{statusText}</strong>
                </Typography>

                {/* ✅ Table Showing Current Submission */}
                <Box sx={{ overflowX: "auto", mt: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Date</b>
                        </TableCell>
                        <TableCell>
                          <b>Time</b>
                        </TableCell>
                        <TableCell>
                          <b>IP</b>
                        </TableCell>
                        <TableCell>
                          <b>Country</b>
                        </TableCell>
                        <TableCell>
                          <b>Project ID</b>
                        </TableCell>
                        <TableCell>
                          <b>UID</b>
                        </TableCell>
                        <TableCell>
                          <b>Status</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{currentRow.date}</TableCell>
                        <TableCell>{currentRow.time}</TableCell>
                        <TableCell>{currentRow.ip}</TableCell>
                        <TableCell>{currentRow.country}</TableCell>
                        <TableCell>{currentRow.pid}</TableCell>
                        <TableCell>{currentRow.uid}</TableCell>
                        <TableCell>{currentRow.status}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>

                <Box mt={4}>
                  <Button variant="contained" color="primary" href="/">
                    Go Back to Home
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Ending;
