import { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import BreadCrums from "../../../Components/BreadCrums";

const companiesData = [
  { id: 1, serialNo: 1, JobTitle: "Alpha Corp", JobCode: "AC001" },
  { id: 2, serialNo: 2, JobTitle: "Beta Inc", JobCode: "BI002" },
  { id: 3, serialNo: 3, JobTitle: "Gamma Ltd", JobCode: "GL003" },
  { id: 4, serialNo: 4, JobTitle: "Delta Co", JobCode: "DC004" },
  {
    id: 5,
    serialNo: 5,
    JobTitle: "Epsilon Enterprises",
    JobCode: "EE005",
  },
  { id: 6, serialNo: 6, JobTitle: "Fusion Dynamics", JobCode: "FD006" },
  { id: 7, serialNo: 7, JobTitle: "Galaxy Systems", JobCode: "GS007" },
  {
    id: 8,
    serialNo: 8,
    JobTitle: "Horizon Innovations",
    JobCode: "HI008",
  },
  {
    id: 9,
    serialNo: 9,
    JobTitle: "Infinity Solutions",
    JobCode: "IS009",
  },
  { id: 10, serialNo: 10, JobTitle: "Jupiter Tech", JobCode: "JT010" },
  { id: 11, serialNo: 11, JobTitle: "Krypton Labs", JobCode: "KL011" },
  { id: 12, serialNo: 12, JobTitle: "Lunar Ventures", JobCode: "LV012" },
  { id: 13, serialNo: 13, JobTitle: "Magna Corp", JobCode: "MC013" },
  { id: 14, serialNo: 14, JobTitle: "Nexus Group", JobCode: "NG014" },
  { id: 15, serialNo: 15, JobTitle: "Orion Systems", JobCode: "OS015" },
  {
    id: 16,
    serialNo: 16,
    JobTitle: "Phoenix Solutions",
    JobCode: "PS016",
  },
  { id: 17, serialNo: 17, JobTitle: "Quasar Tech", JobCode: "QT017" },
  {
    id: 18,
    serialNo: 18,
    JobTitle: "Radiant Innovations",
    JobCode: "RI018",
  },
  {
    id: 19,
    serialNo: 19,
    JobTitle: "Stellar Dynamics",
    JobCode: "SD019",
  },
  {
    id: 20,
    serialNo: 20,
    JobTitle: "Titan Enterprises",
    JobCode: "TE020",
  },
  { id: 21, serialNo: 21, JobTitle: "Andromeda Corp", JobCode: "AC021" },
  { id: 22, serialNo: 22, JobTitle: "Borealis Inc", JobCode: "BI022" },
  { id: 23, serialNo: 23, JobTitle: "Celestial Ltd", JobCode: "CL023" },
  { id: 24, serialNo: 24, JobTitle: "Dynamo Co", JobCode: "DC024" },
  {
    id: 25,
    serialNo: 25,
    JobTitle: "Everest Solutions",
    JobCode: "ES025",
  },
  { id: 26, serialNo: 26, JobTitle: "Flare Systems", JobCode: "FS026" },
  { id: 27, serialNo: 27, JobTitle: "Global Nexus", JobCode: "GN027" },
  { id: 28, serialNo: 28, JobTitle: "Hyperion Inc", JobCode: "HI028" },
  {
    id: 29,
    serialNo: 29,
    JobTitle: "Ion Innovations",
    JobCode: "II029",
  },
  { id: 30, serialNo: 30, JobTitle: "Jubilee Corp", JobCode: "JC030" },
  {
    id: 31,
    serialNo: 31,
    JobTitle: "Kinetic Solutions",
    JobCode: "KS031",
  },
  { id: 32, serialNo: 32, JobTitle: "Lumen Tech", JobCode: "LT032" },
  { id: 33, serialNo: 33, JobTitle: "Monarch Group", JobCode: "MG033" },
  { id: 34, serialNo: 34, JobTitle: "Nimbus Systems", JobCode: "NS034" },
  { id: 35, serialNo: 35, JobTitle: "Opal Ventures", JobCode: "OV035" },
  { id: 36, serialNo: 36, JobTitle: "Pinnacle Corp", JobCode: "PC036" },
  { id: 37, serialNo: 37, JobTitle: "Quantum Ltd", JobCode: "QL037" },
  { id: 38, serialNo: 38, JobTitle: "Rift Solutions", JobCode: "RS038" },
  { id: 39, serialNo: 39, JobTitle: "Summit Inc", JobCode: "SI039" },
  {
    id: 40,
    serialNo: 40,
    JobTitle: "Terra Enterprises",
    JobCode: "TE040",
  },
  { id: 41, serialNo: 41, JobTitle: "Unity Systems", JobCode: "US041" },
  { id: 42, serialNo: 42, JobTitle: "Vortex Corp", JobCode: "VC042" },
  { id: 43, serialNo: 43, JobTitle: "Waypoint Inc", JobCode: "WI043" },
  { id: 44, serialNo: 44, JobTitle: "Xenon Labs", JobCode: "XL044" },
  {
    id: 45,
    serialNo: 45,
    JobTitle: "Yield Solutions",
    JobCode: "YS045",
  },
  { id: 46, serialNo: 46, JobTitle: "Zenith Group", JobCode: "ZG046" },
  {
    id: 47,
    serialNo: 47,
    JobTitle: "Aether Dynamics",
    JobCode: "AD047",
  },
  {
    id: 48,
    serialNo: 48,
    JobTitle: "Breeze Innovations",
    JobCode: "BI048",
  },
  {
    id: 49,
    serialNo: 49,
    JobTitle: "Cascade Systems",
    JobCode: "CS049",
  },
  {
    id: 50,
    serialNo: 50,
    JobTitle: "Dawn Enterprises",
    JobCode: "DE050",
  },
  { id: 51, serialNo: 51, JobTitle: "Echo Corp", JobCode: "EC051" },
  { id: 52, serialNo: 52, JobTitle: "Facet Inc", JobCode: "FI052" },
  { id: 53, serialNo: 53, JobTitle: "Glide Ltd", JobCode: "GL053" },
  { id: 54, serialNo: 54, JobTitle: "Helix Co", JobCode: "HC054" },
  { id: 55, serialNo: 55, JobTitle: "Iris Solutions", JobCode: "IS055" },
  { id: 56, serialNo: 56, JobTitle: "Jade Systems", JobCode: "JS056" },
  { id: 57, serialNo: 57, JobTitle: "Kite Ventures", JobCode: "KV057" },
  { id: 58, serialNo: 58, JobTitle: "Lark Corp", JobCode: "LC058" },
  { id: 59, serialNo: 59, JobTitle: "Mystic Inc", JobCode: "MI059" },
  { id: 60, serialNo: 60, JobTitle: "Nova Ltd", JobCode: "NL060" },
  { id: 61, serialNo: 61, JobTitle: "Onyx Co", JobCode: "OC061" },
  {
    id: 62,
    serialNo: 62,
    JobTitle: "Pulse Enterprises",
    JobCode: "PE062",
  },
  { id: 63, serialNo: 63, JobTitle: "Quill Corp", JobCode: "QC063" },
  { id: 64, serialNo: 64, JobTitle: "River Inc", JobCode: "RI064" },
  { id: 65, serialNo: 65, JobTitle: "Skyline Ltd", JobCode: "SL065" },
  { id: 66, serialNo: 66, JobTitle: "Trailblazer Co", JobCode: "TC066" },
  { id: 67, serialNo: 67, JobTitle: "Utopia Systems", JobCode: "US067" },
  { id: 68, serialNo: 68, JobTitle: "Vanguard Corp", JobCode: "VC068" },
  { id: 69, serialNo: 69, JobTitle: "Whisper Inc", JobCode: "WI069" },
  { id: 70, serialNo: 70, JobTitle: "Xcelerate Ltd", JobCode: "XL070" },
];

const JobsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const breadcrumbItems = [{ label: "Home", path: "/dashboard" }, { label: "Crons" }];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewClick = (id) => {
    navigate(`/jobs/crons/view/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/jobs/crons/edit/${id}`);
  };

  const filteredCompanies = companiesData.filter((company) =>
    Object.values(company).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    { field: "serialNo", headerName: "S.No.",width:100 },
    { field: "JobTitle", headerName: "Job Title", width:200 },
    { field: "JobCode", headerName: "Jobs Code", width:200 },
    {
      field: "view",
      headerName: "View",
      width:100,
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
      width:100,
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
      <Box position={'relative'}>
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
          placeholder="Search crons..."
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
          onClick={() => navigate("/jobs/crons/create")}
          sx={{
            textTransform: "none",
          }}
        >
          Create New Crons
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

export default JobsList;
