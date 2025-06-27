import React, { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import BreadCrums from "../../Components/BreadCrums";

const companiesData = [
  { id: 1, serialNo: 1, companyName: "Alpha Corp", companyCode: "AC001" },
  { id: 2, serialNo: 2, companyName: "Beta Inc", companyCode: "BI002" },
  { id: 3, serialNo: 3, companyName: "Gamma Ltd", companyCode: "GL003" },
  { id: 4, serialNo: 4, companyName: "Delta Co", companyCode: "DC004" },
  {
    id: 5,
    serialNo: 5,
    companyName: "Epsilon Enterprises",
    companyCode: "EE005",
  },
  { id: 6, serialNo: 6, companyName: "Fusion Dynamics", companyCode: "FD006" },
  { id: 7, serialNo: 7, companyName: "Galaxy Systems", companyCode: "GS007" },
  {
    id: 8,
    serialNo: 8,
    companyName: "Horizon Innovations",
    companyCode: "HI008",
  },
  {
    id: 9,
    serialNo: 9,
    companyName: "Infinity Solutions",
    companyCode: "IS009",
  },
  { id: 10, serialNo: 10, companyName: "Jupiter Tech", companyCode: "JT010" },
  { id: 11, serialNo: 11, companyName: "Krypton Labs", companyCode: "KL011" },
  { id: 12, serialNo: 12, companyName: "Lunar Ventures", companyCode: "LV012" },
  { id: 13, serialNo: 13, companyName: "Magna Corp", companyCode: "MC013" },
  { id: 14, serialNo: 14, companyName: "Nexus Group", companyCode: "NG014" },
  { id: 15, serialNo: 15, companyName: "Orion Systems", companyCode: "OS015" },
  {
    id: 16,
    serialNo: 16,
    companyName: "Phoenix Solutions",
    companyCode: "PS016",
  },
  { id: 17, serialNo: 17, companyName: "Quasar Tech", companyCode: "QT017" },
  {
    id: 18,
    serialNo: 18,
    companyName: "Radiant Innovations",
    companyCode: "RI018",
  },
  {
    id: 19,
    serialNo: 19,
    companyName: "Stellar Dynamics",
    companyCode: "SD019",
  },
  {
    id: 20,
    serialNo: 20,
    companyName: "Titan Enterprises",
    companyCode: "TE020",
  },
  { id: 21, serialNo: 21, companyName: "Andromeda Corp", companyCode: "AC021" },
  { id: 22, serialNo: 22, companyName: "Borealis Inc", companyCode: "BI022" },
  { id: 23, serialNo: 23, companyName: "Celestial Ltd", companyCode: "CL023" },
  { id: 24, serialNo: 24, companyName: "Dynamo Co", companyCode: "DC024" },
  {
    id: 25,
    serialNo: 25,
    companyName: "Everest Solutions",
    companyCode: "ES025",
  },
  { id: 26, serialNo: 26, companyName: "Flare Systems", companyCode: "FS026" },
  { id: 27, serialNo: 27, companyName: "Global Nexus", companyCode: "GN027" },
  { id: 28, serialNo: 28, companyName: "Hyperion Inc", companyCode: "HI028" },
  {
    id: 29,
    serialNo: 29,
    companyName: "Ion Innovations",
    companyCode: "II029",
  },
  { id: 30, serialNo: 30, companyName: "Jubilee Corp", companyCode: "JC030" },
  {
    id: 31,
    serialNo: 31,
    companyName: "Kinetic Solutions",
    companyCode: "KS031",
  },
  { id: 32, serialNo: 32, companyName: "Lumen Tech", companyCode: "LT032" },
  { id: 33, serialNo: 33, companyName: "Monarch Group", companyCode: "MG033" },
  { id: 34, serialNo: 34, companyName: "Nimbus Systems", companyCode: "NS034" },
  { id: 35, serialNo: 35, companyName: "Opal Ventures", companyCode: "OV035" },
  { id: 36, serialNo: 36, companyName: "Pinnacle Corp", companyCode: "PC036" },
  { id: 37, serialNo: 37, companyName: "Quantum Ltd", companyCode: "QL037" },
  { id: 38, serialNo: 38, companyName: "Rift Solutions", companyCode: "RS038" },
  { id: 39, serialNo: 39, companyName: "Summit Inc", companyCode: "SI039" },
  {
    id: 40,
    serialNo: 40,
    companyName: "Terra Enterprises",
    companyCode: "TE040",
  },
  { id: 41, serialNo: 41, companyName: "Unity Systems", companyCode: "US041" },
  { id: 42, serialNo: 42, companyName: "Vortex Corp", companyCode: "VC042" },
  { id: 43, serialNo: 43, companyName: "Waypoint Inc", companyCode: "WI043" },
  { id: 44, serialNo: 44, companyName: "Xenon Labs", companyCode: "XL044" },
  {
    id: 45,
    serialNo: 45,
    companyName: "Yield Solutions",
    companyCode: "YS045",
  },
  { id: 46, serialNo: 46, companyName: "Zenith Group", companyCode: "ZG046" },
  {
    id: 47,
    serialNo: 47,
    companyName: "Aether Dynamics",
    companyCode: "AD047",
  },
  {
    id: 48,
    serialNo: 48,
    companyName: "Breeze Innovations",
    companyCode: "BI048",
  },
  {
    id: 49,
    serialNo: 49,
    companyName: "Cascade Systems",
    companyCode: "CS049",
  },
  {
    id: 50,
    serialNo: 50,
    companyName: "Dawn Enterprises",
    companyCode: "DE050",
  },
  { id: 51, serialNo: 51, companyName: "Echo Corp", companyCode: "EC051" },
  { id: 52, serialNo: 52, companyName: "Facet Inc", companyCode: "FI052" },
  { id: 53, serialNo: 53, companyName: "Glide Ltd", companyCode: "GL053" },
  { id: 54, serialNo: 54, companyName: "Helix Co", companyCode: "HC054" },
  { id: 55, serialNo: 55, companyName: "Iris Solutions", companyCode: "IS055" },
  { id: 56, serialNo: 56, companyName: "Jade Systems", companyCode: "JS056" },
  { id: 57, serialNo: 57, companyName: "Kite Ventures", companyCode: "KV057" },
  { id: 58, serialNo: 58, companyName: "Lark Corp", companyCode: "LC058" },
  { id: 59, serialNo: 59, companyName: "Mystic Inc", companyCode: "MI059" },
  { id: 60, serialNo: 60, companyName: "Nova Ltd", companyCode: "NL060" },
  { id: 61, serialNo: 61, companyName: "Onyx Co", companyCode: "OC061" },
  {
    id: 62,
    serialNo: 62,
    companyName: "Pulse Enterprises",
    companyCode: "PE062",
  },
  { id: 63, serialNo: 63, companyName: "Quill Corp", companyCode: "QC063" },
  { id: 64, serialNo: 64, companyName: "River Inc", companyCode: "RI064" },
  { id: 65, serialNo: 65, companyName: "Skyline Ltd", companyCode: "SL065" },
  { id: 66, serialNo: 66, companyName: "Trailblazer Co", companyCode: "TC066" },
  { id: 67, serialNo: 67, companyName: "Utopia Systems", companyCode: "US067" },
  { id: 68, serialNo: 68, companyName: "Vanguard Corp", companyCode: "VC068" },
  { id: 69, serialNo: 69, companyName: "Whisper Inc", companyCode: "WI069" },
  { id: 70, serialNo: 70, companyName: "Xcelerate Ltd", companyCode: "XL070" },
];

const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const breadcrumbItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Customers" },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewClick = (id) => {
    navigate(`/customers/view/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/customers/edit/${id}`);
  };

  const filteredCompanies = companiesData.filter((company) =>
    Object.values(company).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    { field: "serialNo", headerName: "S.No.", },
    { field: "companyName", headerName: "Company Name",width:200},
    { field: "companyCode", headerName: "Company Code",width:200 },
    {
      field: "view",
      headerName: "View",
      width:150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleViewClick(params.row.id)}
            style={{ marginRight: 8 }}
          >
            View
          </Button>
        </>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width:150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleEditClick(params.row.id)}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={3 / 2}
      height={"100%"}
      p={3}
      bgcolor={"background.paper"}
    >
      <Box position={"relative"}>
        <BreadCrums items={breadcrumbItems} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column-reverse", md: "row" }}
        gap={{ xs: "20px" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TextField
          variant="outlined"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={handleSearchChange}
          size="small"
          sx={{
            width: { xs: "100%", sm: "35%" },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/customers/create")}
          sx={{
            textTransform: "none",
          }}
        >
          Create New Customer
        </Button>
      </Box>
      <Box flex={1} sx={{ overflowY: "hidden" }} maxHeight={"100%"}>
        <DataGrid
          rows={filteredCompanies}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default CustomerList;
