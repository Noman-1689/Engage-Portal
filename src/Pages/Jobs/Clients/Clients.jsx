import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Switch,
} from "@mui/material";
import BreadCrums from "../../../Components/BreadCrums";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Clients = () => {
  const breadcrumbItems = [{ label: "Home", path: "/dashboard" }, { label: "Clients" }];
  const clientsData = [
    { id: 1, serialNo: 1, clientName: "Alpha Corp", clientCron: "AC001", status: true, startTime: "08:00", endTime: "17:00" },
    { id: 2, serialNo: 2, clientName: "Beta Inc", clientCron: "BI002", status: false, startTime: "09:30", endTime: "18:30" },
    { id: 3, serialNo: 3, clientName: "Gamma Ltd", clientCron: "GL003", status: true, startTime: "07:45", endTime: "16:45" },
    { id: 4, serialNo: 4, clientName: "Delta Co", clientCron: "DC004", status: false, startTime: "10:15", endTime: "19:15" },
    { id: 5, serialNo: 5, clientName: "Epsilon Enterprises", clientCron: "EE005", status: true, startTime: "08:30", endTime: "17:30" },
    { id: 6, serialNo: 6, clientName: "Fusion Dynamics", clientCron: "FD006", status: false, startTime: "09:00", endTime: "18:00" },
    { id: 7, serialNo: 7, clientName: "Galaxy Systems", clientCron: "GS007", status: true, startTime: "07:00", endTime: "16:00" },
    { id: 8, serialNo: 8, clientName: "Horizon Innovations", clientCron: "HI008", status: false, startTime: "10:00", endTime: "19:00" },
    { id: 9, serialNo: 9, clientName: "Infinity Solutions", clientCron: "IS009", status: true, startTime: "08:15", endTime: "17:15" },
    { id: 10, serialNo: 10, clientName: "Jupiter Tech", clientCron: "JT010", status: false, startTime: "09:45", endTime: "18:45" },
    { id: 11, serialNo: 11, clientName: "Krypton Labs", clientCron: "KL011", status: true, startTime: "07:30", endTime: "16:30" },
    { id: 12, serialNo: 12, clientName: "Lunar Ventures", clientCron: "LV012", status: false, startTime: "10:30", endTime: "19:30" },
    { id: 13, serialNo: 13, clientName: "Magna Corp", clientCron: "MC013", status: true, startTime: "08:45", endTime: "17:45" },
    { id: 14, serialNo: 14, clientName: "Nexus Group", clientCron: "NG014", status: false, startTime: "09:15", endTime: "18:15" },
    { id: 15, serialNo: 15, clientName: "Orion Systems", clientCron: "OS015", status: true, startTime: "07:15", endTime: "16:15" },
    { id: 16, serialNo: 16, clientName: "Phoenix Solutions", clientCron: "PS016", status: false, startTime: "10:45", endTime: "19:45" },
    { id: 17, serialNo: 17, clientName: "Quasar Tech", clientCron: "QT017", status: true, startTime: "08:00", endTime: "17:00" },
    { id: 18, serialNo: 18, clientName: "Radiant Innovations", clientCron: "RI018", status: false, startTime: "09:30", endTime: "18:30" },
    { id: 19, serialNo: 19, clientName: "Stellar Dynamics", clientCron: "SD019", status: true, startTime: "07:45", endTime: "16:45" },
    { id: 20, serialNo: 20, clientName: "Titan Enterprises", clientCron: "TE020", status: false, startTime: "10:15", endTime: "19:15" },
    { id: 21, serialNo: 21, clientName: "Andromeda Corp", clientCron: "AC021", status: true, startTime: "08:30", endTime: "17:30" },
    { id: 22, serialNo: 22, clientName: "Borealis Inc", clientCron: "BI022", status: false, startTime: "09:00", endTime: "18:00" },
    { id: 23, serialNo: 23, clientName: "Celestial Ltd", clientCron: "CL023", status: true, startTime: "07:00", endTime: "16:00" },
    { id: 24, serialNo: 24, clientName: "Dynamo Co", clientCron: "DC024", status: false, startTime: "10:00", endTime: "19:00" },
    { id: 25, serialNo: 25, clientName: "Everest Solutions", clientCron: "ES025", status: true, startTime: "08:15", endTime: "17:15" },
    { id: 26, serialNo: 26, clientName: "Flare Systems", clientCron: "FS026", status: false, startTime: "09:45", endTime: "18:45" },
    { id: 27, serialNo: 27, clientName: "Global Nexus", clientCron: "GN027", status: true, startTime: "07:30", endTime: "16:30" },
    { id: 28, serialNo: 28, clientName: "Hyperion Inc", clientCron: "HI028", status: false, startTime: "10:30", endTime: "19:30" },
    { id: 29, serialNo: 29, clientName: "Ion Innovations", clientCron: "II029", status: true, startTime: "08:45", endTime: "17:45" },
    { id: 30, serialNo: 30, clientName: "Jubilee Corp", clientCron: "JC030", status: false, startTime: "09:15", endTime: "18:15" },
    { id: 31, serialNo: 31, clientName: "Kinetic Solutions", clientCron: "KS031", status: true, startTime: "07:15", endTime: "16:15" },
    { id: 32, serialNo: 32, clientName: "Lumen Tech", clientCron: "LT032", status: false, startTime: "10:45", endTime: "19:45" },
    { id: 33, serialNo: 33, clientName: "Monarch Group", clientCron: "MG033", status: true, startTime: "08:00", endTime: "17:00" },
    { id: 34, serialNo: 34, clientName: "Nimbus Systems", clientCron: "NS034", status: false, startTime: "09:30", endTime: "18:30" },
    { id: 35, serialNo: 35, clientName: "Opal Ventures", clientCron: "OV035", status: true, startTime: "07:45", endTime: "16:45" },
    { id: 36, serialNo: 36, clientName: "Pinnacle Corp", clientCron: "PC036", status: false, startTime: "10:15", endTime: "19:15" },
    { id: 37, serialNo: 37, clientName: "Quantum Ltd", clientCron: "QL037", status: true, startTime: "08:30", endTime: "17:30" },
    { id: 38, serialNo: 38, clientName: "Rift Solutions", clientCron: "RS038", status: false, startTime: "09:00", endTime: "18:00" },
    { id: 39, serialNo: 39, clientName: "Summit Inc", clientCron: "SI039", status: true, startTime: "07:00", endTime: "16:00" },
    { id: 40, serialNo: 40, clientName: "Terra Enterprises", clientCron: "TE040", status: false, startTime: "10:00", endTime: "19:00" },
    { id: 41, serialNo: 41, clientName: "Unity Systems", clientCron: "US041", status: true, startTime: "08:15", endTime: "17:15" },
    { id: 42, serialNo: 42, clientName: "Vortex Corp", clientCron: "VC042", status: false, startTime: "09:45", endTime: "18:45" },
    { id: 43, serialNo: 43, clientName: "Waypoint Inc", clientCron: "WI043", status: true, startTime: "07:30", endTime: "16:30" },
    { id: 44, serialNo: 44, clientName: "Xenon Labs", clientCron: "XL044", status: false, startTime: "10:30", endTime: "19:30" },
    { id: 45, serialNo: 45, clientName: "Yield Solutions", clientCron: "YS045", status: true, startTime: "08:45", endTime: "17:45" },
    { id: 46, serialNo: 46, clientName: "Zenith Group", clientCron: "ZG046", status: false, startTime: "09:15", endTime: "18:15" },
    { id: 47, serialNo: 47, clientName: "Aether Dynamics", clientCron: "AD047", status: true, startTime: "07:15", endTime: "16:15" },
    { id: 48, serialNo: 48, clientName: "Breeze Innovations", clientCron: "BI048", status: false, startTime: "10:45", endTime: "19:45" },
    { id: 49, serialNo: 49, clientName: "Cascade Systems", clientCron: "CS049", status: true, startTime: "08:00", endTime: "17:00" },
    { id: 50, serialNo: 50, clientName: "Dawn Enterprises", clientCron: "DE050", status: false, startTime: "09:30", endTime: "18:30" },
    { id: 51, serialNo: 51, clientName: "Echo Corp", clientCron: "EC051", status: true, startTime: "07:45", endTime: "16:45" },
    { id: 52, serialNo: 52, clientName: "Facet Inc", clientCron: "FI052", status: false, startTime: "10:15", endTime: "19:15" },
    { id: 53, serialNo: 53, clientName: "Glide Ltd", clientCron: "GL053", status: true, startTime: "08:30", endTime: "17:30" },
    { id: 54, serialNo: 54, clientName: "Helix Co", clientCron: "HC054", status: false, startTime: "09:00", endTime: "18:00" },
    { id: 55, serialNo: 55, clientName: "Iris Solutions", clientCron: "IS055", status: true, startTime: "07:00", endTime: "16:00" },
    { id: 56, serialNo: 56, clientName: "Jade Systems", clientCron: "JS056", status: false, startTime: "10:00", endTime: "19:00" },
    { id: 57, serialNo: 57, clientName: "Kite Ventures", clientCron: "KV057", status: true, startTime: "08:15", endTime: "17:15" },
    { id: 58, serialNo: 58, clientName: "Lark Corp", clientCron: "LC058", status: false, startTime: "09:45", endTime: "18:45" },
    { id: 59, serialNo: 59, clientName: "Mystic Inc", clientCron: "MI059", status: true, startTime: "07:30", endTime: "16:30" },
    { id: 60, serialNo: 60, clientName: "Nova Ltd", clientCron: "NL060", status: false, startTime: "10:30", endTime: "19:30" },
    { id: 61, serialNo: 61, clientName: "Onyx Co", clientCron: "OC061", status: true, startTime: "08:45", endTime: "17:45" },
    { id: 62, serialNo: 62, clientName: "Pulse Enterprises", clientCron: "PE062", status: false, startTime: "09:15", endTime: "18:15" },
    { id: 63, serialNo: 63, clientName: "Quill Corp", clientCron: "QC063", status: true, startTime: "07:15", endTime: "16:15" },
    { id: 64, serialNo: 64, clientName: "River Inc", clientCron: "RI064", status: false, startTime: "10:45", endTime: "19:45" },
    { id: 65, serialNo: 65, clientName: "Skyline Ltd", clientCron: "SL065", status: true, startTime: "08:00", endTime: "17:00" },
    { id: 66, serialNo: 66, clientName: "Trailblazer Co", clientCron: "TC066", status: false, startTime: "09:30", endTime: "18:30" },
    { id: 67, serialNo: 67, clientName: "Utopia Systems", clientCron: "US067", status: true, startTime: "07:45", endTime: "16:45" },
    { id: 68, serialNo: 68, clientName: "Vanguard Corp", clientCron: "VC068", status: false, startTime: "10:15", endTime: "19:15" },
    { id: 69, serialNo: 69, clientName: "Whisper Inc", clientCron: "WI069", status: true, startTime: "08:30", endTime: "17:30" },
    { id: 70, serialNo: 70, clientName: "Xcelerate Ltd", clientCron: "XL070", status: false, startTime: "09:00", endTime: "18:00" },
];
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEditClick = (id) => {
    navigate(`/jobs/cron-clients/edit/${id}`);
  };

  const filteredClients = clientsData.filter((client) =>
    Object.values(client).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const columns = [
    { field: "serialNo", headerName: "S.No.",width:100 },
    { field: "clientName", headerName: "Client Name", width:200 },
    { field: "clientCron", headerName: "Client Cron",width:200 },
    { field: "startTime", headerName: "Start Time", width:200},
    {
      field: "status",
      headerName: "Active",
     width:200,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
          <Switch checked={params.row.status}  disabled />
        </>
      ),
    },
    {
      field: "actions",
      headerName: "Action",
      width:200,
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
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      pt={2}
      gap={2}
      bgcolor={"background.paper"}
    >
      <Box width={"90%"} position={'relative'}>
        <BreadCrums items={breadcrumbItems} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column-reverse", md: "row" }}
        gap={{ xs: "20px" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"90%"}
      >
        <TextField
          variant="outlined"
          placeholder="Search clients crons..."
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
          onClick={() => navigate("/jobs/cron-clients/create")}
          sx={{
            textTransform: "none",
          }}
        >
          Create New Record
        </Button>
      </Box>
      <Box height={"80%"} display={"flex"} width={"90%"}>
        <DataGrid
          rows={filteredClients}
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

export default Clients;
