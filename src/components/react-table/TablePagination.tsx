// "use client";
// import * as React from "react";
// import {
//   TableContainer,
//   Table,
//   TableRow,
//   TableCell,
//   TableBody,
//   Avatar,
//   Typography,
//   TableHead,
//   Chip,
//   Box,
//   Grid,
//   MenuItem,
//   Button,
//   Divider,
//   IconButton,
//   AvatarGroup,
// } from "@mui/material";
// import { Stack } from "@mui/system";

// import DownloadCard from "@/app/components/shared/DownloadCard";
// import { basicsTableData } from "@/app/(DashboardLayout)/react-tables/pagination/PaginationData";

// import {
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
//   createColumnHelper,
// } from "@tanstack/react-table";
// import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
// import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
// import {
//   IconChevronLeft,
//   IconChevronRight,
//   IconChevronsLeft,
//   IconChevronsRight,
// } from "@tabler/icons-react";
// import {
//   collection,
//   DocumentData,
//   getDocs,
//   limit,
//   orderBy,
//   query,
//   QueryDocumentSnapshot,
//   startAfter,
// } from "firebase/firestore";
// import { Db } from "@/firebase";
// import moment from "moment";

// interface PaginationDataType {
//   id: string;
//   data: {
//     status?: string;
//     ip?: string;
//     country?: string;
//     date?: string;
//     pid?: string;
//     uid: string;
//     timestamp: string;
//   };
// }

// const columnHelper = createColumnHelper<PaginationDataType>();

// const columns = [
//   columnHelper.accessor((row) => row.data.timestamp, {
//     id: "date",
//     header: "Date",
//     cell: (info) => {
//       const ts = info.row.original.data.timestamp;
//       let rawDate: Date;

//       if (ts?.seconds) {
//         // Firestore Timestamp → JS Date
//         rawDate = new Date(ts.seconds * 1000);
//       } else {
//         // ISO string or normal date string
//         rawDate = new Date(ts);
//       }

//       const formattedDate = moment(rawDate).format("YYYY-MM-DD"); // only date

//       return (
//         <Stack direction="row" alignItems="center" spacing={2}>
//           <Typography variant="h6">{formattedDate || "N/A"}</Typography>
//         </Stack>
//       );
//     },
//   }),
//   columnHelper.accessor((row) => row.data.ip, {
//     id: "ip",
//     header: "IP",
//     cell: (info) => (
//       <Typography variant="h6">{info.row.original.data.ip ?? "N/A"}</Typography>
//     ),
//   }),
//   columnHelper.accessor((row) => row.data.country, {
//     id: "country",
//     header: "Country",
//     cell: (info) => (
//       <Typography variant="h6">
//         {info.row.original.data.country ?? "N/A"}
//       </Typography>
//     ),
//   }),
//   columnHelper.accessor((row) => row.data.pid, {
//     id: "pid",
//     header: "Project ID",
//     cell: (info) => (
//       <Typography variant="subtitle1" color="textSecondary">
//         {info.row.original.data.pid}
//       </Typography>
//     ),
//   }),
//   columnHelper.accessor((row) => row.data.uid, {
//     id: "uid",
//     header: "UID",
//     cell: (info) => (
//       <Typography variant="subtitle1" color="textSecondary">
//         {info.row.original.data.uid}
//       </Typography>
//     ),
//   }),
//   columnHelper.accessor((row) => row.data.timestamp, {
//     id: "timestamp",
//     header: "Time",
//     cell: (info) => (
//       <Typography variant="subtitle1" color="textSecondary">
//         {info.row.original.data.timestamp}
//       </Typography>
//     ),
//   }),
//   columnHelper.accessor((row) => row.data.status, {
//     id: "status",
//     header: "Status",
//     cell: (info) => (
//       <Chip
//         sx={{
//           bgcolor:
//             info.row.original.data.status === "111"
//               ? (theme) => theme.palette.success.light
//               : info.row.original.data.status === "444"
//               ? (theme) => theme.palette.warning.light
//               : info.row.original.data.status === "333"
//               ? (theme) => theme.palette.primary.light
//               : info.row.original.data.status === "222"
//               ? (theme) => theme.palette.error.light
//               : (theme) => theme.palette.secondary.light,
//           color:
//             info.row.original.data.status === "111"
//               ? (theme) => theme.palette.success.main
//               : info.row.original.data.status === "444"
//               ? (theme) => theme.palette.warning.main
//               : info.row.original.data.status === "333"
//               ? (theme) => theme.palette.primary.main
//               : info.row.original.data.status === "222"
//               ? (theme) => theme.palette.error.main
//               : (theme) => theme.palette.secondary.main,
//           borderRadius: "8px",
//         }}
//         label={info.row.original.data.status ?? "unknown"}
//       />
//     ),
//   }),
// ];
// const TablePagination = () => {
//   const [data, _setData] = React.useState<any>(() => []);
//   const [columnFilters, setColumnFilters] = React.useState<any>([]);
//   const rerender = React.useReducer(() => ({}), {})[1];

//   const table = useReactTable({
//     data,
//     columns,
//     filterFns: {},
//     state: {
//       columnFilters,
//     },
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(), //client side filtering
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     debugTable: true,
//     debugHeaders: true,
//     debugColumns: false,
//   });

//   React.useEffect(() => {
//     const fetchData = async (lastDoc?: QueryDocumentSnapshot<DocumentData>) => {
//       try {
//         const usersRef = collection(Db, "pols");

//         let q;
//         if (lastDoc) {
//           // Pagination: load next page after lastDoc
//           q = query(
//             usersRef,
//             orderBy("timestamp", "desc"), // ✅ newest first
//             startAfter(lastDoc),
//             limit(20)
//           );
//         } else {
//           // First page
//           q = query(
//             usersRef,
//             orderBy("timestamp", "desc"), // ✅ newest first
//             limit(20)
//           );
//         }

//         // ✅ IMPORTANT: use q instead of usersRef
//         const snapshot = await getDocs(q);

//         const formatted = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }));

//         console.log("snapshot ordered:", formatted);
//         _setData(formatted);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDownload = () => {
//     // CSV headers
//     const headers = [
//       "id",
//       "date",
//       "ip",
//       "country",
//       "pid",
//       "uid",
//       "timestamp",
//       "status",
//     ];

//     const rows = data.map((item) => {
//       const ts = item.data.timestamp;

//       // Convert Firestore timestamp -> JS Date -> formatted strings
//       let rawDate: Date;
//       if (ts?.seconds) {
//         // Firestore Timestamp object
//         rawDate = new Date(ts.seconds * 1000);
//       } else {
//         // String or ISO format
//         rawDate = new Date(ts);
//       }

//       const dateFormatted = moment(rawDate).format("YYYY-MM-DD"); // only date
//       const timeFormatted = moment(rawDate).format("HH:mm:ss"); // optional time

//       return [
//         item.id ?? "", // doc id
//         dateFormatted ?? "", // formatted date extracted from timestamp
//         item.data.ip ?? "",
//         item.data.country ?? "",
//         item.data.pid ?? "",
//         item.data.uid ?? "",
//         timeFormatted ?? "", // store only time part in timestamp col
//         item.data.status ?? "",
//       ];
//     });

//     const csvContent = [
//       headers.join(","),
//       ...rows.map((row) => row.join(",")),
//     ].join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "table-data.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   console.log("data table", data);

//   return (
//     <DownloadCard title="Survey Table" onDownload={handleDownload}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Box>
//             <TableContainer>
//               <Table
//                 sx={{
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 <TableHead>
//                   {table.getHeaderGroups().map((headerGroup) => (
//                     <TableRow key={headerGroup.id}>
//                       {headerGroup.headers.map((header) => (
//                         <TableCell key={header.id}>
//                           <Typography
//                             variant="h6"
//                             mb={1}
//                             className={
//                               header.column.getCanSort()
//                                 ? "cursor-pointer select-none"
//                                 : ""
//                             }
//                             onClick={header.column.getToggleSortingHandler()}
//                           >
//                             {header.isPlaceholder
//                               ? null
//                               : flexRender(
//                                   header.column.columnDef.header,
//                                   header.getContext()
//                                 )}
//                             {(() => {
//                               const sortState = header.column.getIsSorted();
//                               if (sortState === "asc") return " 🔼";
//                               if (sortState === "desc") return " 🔽";
//                               return null;
//                             })()}
//                           </Typography>
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//                 </TableHead>
//                 <TableBody>
//                   {table.getRowModel().rows.map((row) => (
//                     <TableRow key={row.id}>
//                       {row.getVisibleCells().map((cell) => (
//                         <TableCell key={cell.id}>
//                           {flexRender(
//                             cell.column.columnDef.cell,
//                             cell.getContext()
//                           )}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//             <Divider />
//             <Stack
//               gap={1}
//               p={3}
//               alignItems="center"
//               direction={{ xs: "column", sm: "row" }}
//               justifyContent="space-between"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => rerender()}
//                 >
//                   Force Rerender
//                 </Button>
//                 <Typography variant="body1">
//                   {table.getPrePaginationRowModel().rows.length} Rows
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: {
//                     xs: "block",
//                     sm: "flex",
//                   },
//                 }}
//                 alignItems="center"
//                 gap={1}
//               >
//                 <Stack direction="row" alignItems="center" gap={1}>
//                   <Typography variant="body1">Page</Typography>
//                   <Typography variant="body1" fontWeight={600}>
//                     {table.getState().pagination.pageIndex + 1} of{" "}
//                     {table.getPageCount()}
//                   </Typography>
//                 </Stack>
//                 <Stack direction="row" alignItems="center" gap={1}>
//                   | Go to page:
//                   <CustomTextField
//                     type="number"
//                     min="1"
//                     max={table.getPageCount()}
//                     defaultValue={table.getState().pagination.pageIndex + 1}
//                     onChange={(e: { target: { value: any } }) => {
//                       const page = e.target.value
//                         ? Number(e.target.value) - 1
//                         : 0;
//                       table.setPageIndex(page);
//                     }}
//                   />
//                 </Stack>
//                 <CustomSelect
//                   value={table.getState().pagination.pageSize}
//                   onChange={(e: { target: { value: any } }) => {
//                     table.setPageSize(Number(e.target.value));
//                   }}
//                 >
//                   {[10, 15, 20, 25].map((pageSize) => (
//                     <MenuItem key={pageSize} value={pageSize}>
//                       {pageSize}
//                     </MenuItem>
//                   ))}
//                 </CustomSelect>

//                 <IconButton
//                   size="small"
//                   onClick={() => table.setPageIndex(0)}
//                   disabled={!table.getCanPreviousPage()}
//                 >
//                   <IconChevronsLeft />
//                 </IconButton>
//                 <IconButton
//                   size="small"
//                   onClick={() => table.previousPage()}
//                   disabled={!table.getCanPreviousPage()}
//                 >
//                   <IconChevronLeft />
//                 </IconButton>
//                 <IconButton
//                   size="small"
//                   onClick={() => table.nextPage()}
//                   disabled={!table.getCanNextPage()}
//                 >
//                   <IconChevronRight />
//                 </IconButton>
//                 <IconButton
//                   size="small"
//                   onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//                   disabled={!table.getCanNextPage()}
//                 >
//                   <IconChevronsRight />
//                 </IconButton>
//               </Box>
//             </Stack>
//           </Box>
//         </Grid>
//       </Grid>
//     </DownloadCard>
//   );
// };

// export default TablePagination;

"use client";
import * as React from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TableHead,
  Chip,
  Box,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import { Stack } from "@mui/system";
import DownloadCard from "@/components/shared/DownloadCard";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { Db } from "@/firebase";
import moment from "moment";

const PAGE_SIZE = 100;

interface PaginationDataType {
  id: string;
  data: {
    status?: string;
    ip?: string;
    country?: string;
    date?: string;
    pid?: string;
    uid: string;
    timestamp: any;
  };
}

const columns = [
  { id: "date", label: "Date" },
  { id: "ip", label: "IP" },
  { id: "country", label: "Country" },
  { id: "pid", label: "Project ID" },
  { id: "uid", label: "UID" },
  { id: "time", label: "Time" },
  { id: "status", label: "Status" },
];

const TablePagination = () => {
  const [data, setData] = React.useState<PaginationDataType[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  const [pageCursors, setPageCursors] = React.useState<
    (QueryDocumentSnapshot<DocumentData> | null)[]
  >([null]);

  const [isLastPage, setIsLastPage] = React.useState(false);

  // ✅ Fetch a page
  const fetchPage = async (pageIndex: number) => {
    try {
      const usersRef = collection(Db, "pols");

      let q;
      const cursor = pageCursors[pageIndex];

      if (cursor) {
        q = query(
          usersRef,
          orderBy("timestamp", "desc"),
          startAfter(cursor),
          limit(PAGE_SIZE)
        );
      } else {
        // first page
        q = query(usersRef, orderBy("timestamp", "desc"), limit(PAGE_SIZE));
      }

      const snapshot = await getDocs(q);

      // const formatted = snapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   data: doc.data(),
      // }));

      const formatted: PaginationDataType[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as PaginationDataType["data"], // ✅ Type casting
      }));

      // ✅ Last visible doc for NEXT page
      const lastVisible =
        snapshot.docs.length > 0
          ? snapshot.docs[snapshot.docs.length - 1]
          : null;

      // ✅ If less than PAGE_SIZE → it’s last page
      setIsLastPage(snapshot.docs.length < PAGE_SIZE);

      // ✅ Save NEXT page cursor if it exists
      if (lastVisible && !pageCursors[pageIndex + 1]) {
        setPageCursors((prev) => {
          const updated = [...prev];
          updated[pageIndex + 1] = lastVisible;
          return updated;
        });
      }

      setData(formatted);
    } catch (error) {
      console.error("Error fetching Firestore:", error);
    }
  };

  React.useEffect(() => {
    fetchPage(0);
  }, []);

  // ✅ NEXT Page
  const handleNextPage = () => {
    if (!isLastPage) {
      window.scrollTo(0, 0);
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchPage(nextPage);
    }
  };

  const handleDownload = () => {
    // CSV headers
    const headers = [
      "id",
      "date",
      "ip",
      "country",
      "pid",
      "uid",
      "timestamp",
      "status",
    ];

    const rows = data.map((item) => {
      const ts = item.data.timestamp;

      // Convert Firestore timestamp -> JS Date -> formatted strings
      let rawDate: Date;
      if (ts?.seconds) {
        // Firestore Timestamp object
        rawDate = new Date(ts.seconds * 1000);
      } else {
        // String or ISO format
        rawDate = new Date(ts);
      }

      const dateFormatted = moment(rawDate).format("YYYY-MM-DD"); // only date
      const timeFormatted = moment(rawDate).format("HH:mm:ss"); // optional time

      return [
        item.id ?? "", // doc id
        dateFormatted ?? "", // formatted date extracted from timestamp
        item.data.ip ?? "",
        item.data.country ?? "",
        item.data.pid ?? "",
        item.data.uid ?? "",
        timeFormatted ?? "", // store only time part in timestamp col
        item.data.status ?? "",
      ];
    });

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "table-data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ PREV Page
  const handlePrevPage = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchPage(prevPage);
    }
  };

  // ✅ RESET to First
  const handleFirstPage = () => {
    setCurrentPage(0);
    fetchPage(0);
  };

  const formatDate = (ts: any, onlyTime = false) => {
    let rawDate: Date;
    if (ts?.seconds) rawDate = new Date(ts.seconds * 1000);
    else rawDate = new Date(ts);

    return onlyTime
      ? moment(rawDate).format("HH:mm:ss")
      : moment(rawDate).format("YYYY-MM-DD");
  };

  return (
    <DownloadCard title="Survey Table" onDownload={handleDownload}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((c) => (
                      <TableCell key={c.id}>
                        <Typography variant="h6">{c.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{formatDate(row.data.timestamp)}</TableCell>
                      <TableCell>{row.data.ip ?? "N/A"}</TableCell>
                      <TableCell>{row.data.country ?? "N/A"}</TableCell>
                      <TableCell>{row.data.pid ?? "-"}</TableCell>
                      <TableCell>{row.data.uid ?? "-"}</TableCell>
                      <TableCell>
                        {formatDate(row.data.timestamp, true)}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.data.status ?? "unknown"}
                          sx={{
                            bgcolor:
                              row.data.status === "111"
                                ? (theme) => theme.palette.success.light
                                : row.data.status === "444"
                                ? (theme) => theme.palette.warning.light
                                : row.data.status === "333"
                                ? (theme) => theme.palette.primary.light
                                : row.data.status === "222"
                                ? (theme) => theme.palette.error.light
                                : (theme) => theme.palette.secondary.light,
                            color:
                              row.data.status === "111"
                                ? (theme) => theme.palette.success.main
                                : row.data.status === "444"
                                ? (theme) => theme.palette.warning.main
                                : row.data.status === "333"
                                ? (theme) => theme.palette.primary.main
                                : row.data.status === "222"
                                ? (theme) => theme.palette.error.main
                                : (theme) => theme.palette.secondary.main,
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Divider sx={{ my: 2 }} />

            {/* ✅ Pagination Controls */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              px={2}
            >
              <Typography variant="body2">
                Page {currentPage + 1} {isLastPage ? "(last page)" : ""}
              </Typography>

              <Box>
                <IconButton
                  size="small"
                  onClick={handleFirstPage}
                  disabled={currentPage === 0}
                >
                  <IconChevronsLeft />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                >
                  <IconChevronLeft />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={handleNextPage}
                  disabled={isLastPage}
                >
                  <IconChevronRight />
                </IconButton>
                <IconButton size="small" disabled>
                  <IconChevronsRight />
                </IconButton>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </DownloadCard>
  );
};

export default TablePagination;
