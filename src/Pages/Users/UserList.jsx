import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import BreadCrums from "../../Components/BreadCrums";

  const usersData = [
  {
    id: 1,
    serialNo: 1,
    userName: "Alice Smith",
    userCode: "AS001",
    email: "alice.s@example.com",
  },
  {
    id: 2,
    serialNo: 2,
    userName: "Bob Johnson",
    userCode: "BJ002",
    email: "bob.j@example.com",
  },
  {
    id: 3,
    serialNo: 3,
    userName: "Charlie Brown",
    userCode: "CB003",
    email: "charlie.b@example.com",
  },
  {
    id: 4,
    serialNo: 4,
    userName: "Diana Prince",
    userCode: "DP004",
    email: "diana.p@example.com",
  },
  {
    id: 5,
    serialNo: 5,
    userName: "Eve Adams",
    userCode: "EA005",
    email: "eve.a@example.com",
  },
  {
    id: 6,
    serialNo: 6,
    userName: "Frank White",
    userCode: "FW006",
    email: "frank.w@example.com",
  },
  {
    id: 7,
    serialNo: 7,
    userName: "Grace Hall",
    userCode: "GH007",
    email: "grace.h@example.com",
  },
  {
    id: 8,
    serialNo: 8,
    userName: "Henry King",
    userCode: "HK008",
    email: "henry.k@example.com",
  },
  {
    id: 9,
    serialNo: 9,
    userName: "Ivy Lee",
    userCode: "IL009",
    email: "ivy.l@example.com",
  },
  {
    id: 10,
    serialNo: 10,
    userName: "Jack Green",
    userCode: "JG010",
    email: "jack.g@example.com",
  },
  {
    id: 11,
    serialNo: 11,
    userName: "Karen Black",
    userCode: "KB011",
    email: "karen.b@example.com",
  },
  {
    id: 12,
    serialNo: 12,
    userName: "Liam Scott",
    userCode: "LS012",
    email: "liam.s@example.com",
  },
  {
    id: 13,
    serialNo: 13,
    userName: "Mia Young",
    userCode: "MY013",
    email: "mia.y@example.com",
  },
  {
    id: 14,
    serialNo: 14,
    userName: "Noah Wright",
    userCode: "NW014",
    email: "noah.w@example.com",
  },
  {
    id: 15,
    serialNo: 15,
    userName: "Olivia Perez",
    userCode: "OP015",
    email: "olivia.p@example.com",
  },
  {
    id: 16,
    serialNo: 16,
    userName: "Peter Evans",
    userCode: "PE016",
    email: "peter.e@example.com",
  },
  {
    id: 17,
    serialNo: 17,
    userName: "Quinn Davis",
    userCode: "QD017",
    email: "quinn.d@example.com",
  },
  {
    id: 18,
    serialNo: 18,
    userName: "Rachel Garcia",
    userCode: "RG018",
    email: "rachel.g@example.com",
  },
  {
    id: 19,
    serialNo: 19,
    userName: "Sam Wilson",
    userCode: "SW019",
    email: "sam.w@example.com",
  },
  {
    id: 20,
    serialNo: 20,
    userName: "Tina Martinez",
    userCode: "TM020",
    email: "tina.m@example.com",
  },
  {
    id: 21,
    serialNo: 21,
    userName: "Uma Rodriguez",
    userCode: "UR021",
    email: "uma.r@example.com",
  },
  {
    id: 22,
    serialNo: 22,
    userName: "Victor Lee",
    userCode: "VL022",
    email: "victor.l@example.com",
  },
  {
    id: 23,
    serialNo: 23,
    userName: "Wendy Miller",
    userCode: "WM023",
    email: "wendy.m@example.com",
  },
  {
    id: 24,
    serialNo: 24,
    userName: "Xavier Moore",
    userCode: "XM024",
    email: "xavier.m@example.com",
  },
  {
    id: 25,
    serialNo: 25,
    userName: "Yara Taylor",
    userCode: "YT025",
    email: "yara.t@example.com",
  },
  {
    id: 26,
    serialNo: 26,
    userName: "Zack Anderson",
    userCode: "ZA026",
    email: "zack.a@example.com",
  },
  {
    id: 27,
    serialNo: 27,
    userName: "Amber Thomas",
    userCode: "AT027",
    email: "amber.t@example.com",
  },
  {
    id: 28,
    serialNo: 28,
    userName: "Brian Jackson",
    userCode: "BJ028",
    email: "brian.j@example.com",
  },
  {
    id: 29,
    serialNo: 29,
    userName: "Chloe White",
    userCode: "CW029",
    email: "chloe.w@example.com",
  },
  {
    id: 30,
    serialNo: 30,
    userName: "David Harris",
    userCode: "DH030",
    email: "david.h@example.com",
  },
  {
    id: 31,
    serialNo: 31,
    userName: "Emily Clark",
    userCode: "EC031",
    email: "emily.c@example.com",
  },
  {
    id: 32,
    serialNo: 32,
    userName: "Fiona Lewis",
    userCode: "FL032",
    email: "fiona.l@example.com",
  },
  {
    id: 33,
    serialNo: 33,
    userName: "George Robin",
    userCode: "GR033",
    email: "george.r@example.com",
  },
  {
    id: 34,
    serialNo: 34,
    userName: "Hannah Young",
    userCode: "HY034",
    email: "hannah.y@example.com",
  },
  {
    id: 35,
    serialNo: 35,
    userName: "Isaac Hall",
    userCode: "IH035",
    email: "isaac.h@example.com",
  },
  {
    id: 36,
    serialNo: 36,
    userName: "Julia Allen",
    userCode: "JA036",
    email: "julia.a@example.com",
  },
  {
    id: 37,
    serialNo: 37,
    userName: "Kyle Baker",
    userCode: "KB037",
    email: "kyle.b@example.com",
  },
  {
    id: 38,
    serialNo: 38,
    userName: "Laura Green",
    userCode: "LG038",
    email: "laura.g@example.com",
  },
  {
    id: 39,
    serialNo: 39,
    userName: "Mark Davis",
    userCode: "MD039",
    email: "mark.d@example.com",
  },
  {
    id: 40,
    serialNo: 40,
    userName: "Nina King",
    userCode: "NK040",
    email: "nina.k@example.com",
  },
  {
    id: 41,
    serialNo: 41,
    userName: "Oscar Bell",
    userCode: "OB041",
    email: "oscar.b@example.com",
  },
  {
    id: 42,
    serialNo: 42,
    userName: "Pamela Scott",
    userCode: "PS042",
    email: "pamela.s@example.com",
  },
  {
    id: 43,
    serialNo: 43,
    userName: "Robert Turner",
    userCode: "RT043",
    email: "robert.t@example.com",
  },
  {
    id: 44,
    serialNo: 44,
    userName: "Sarah Adams",
    userCode: "SA044",
    email: "sarah.a@example.com",
  },
  {
    id: 45,
    serialNo: 45,
    userName: "Thomas Lewis",
    userCode: "TL045",
    email: "thomas.l@example.com",
  },
  {
    id: 46,
    serialNo: 46,
    userName: "Victoria Hill",
    userCode: "VH046",
    email: "victoria.h@example.com",
  },
  {
    id: 47,
    serialNo: 47,
    userName: "William Wright",
    userCode: "WW047",
    email: "william.w@example.com",
  },
  {
    id: 48,
    serialNo: 48,
    userName: "Xenia Clark",
    userCode: "XC048",
    email: "xenia.c@example.com",
  },
  {
    id: 49,
    serialNo: 49,
    userName: "Yusuf Walker",
    userCode: "YW049",
    email: "yusuf.w@example.com",
  },
  {
    id: 50,
    serialNo: 50,
    userName: "Zara Perez",
    userCode: "ZP050",
    email: "zara.p@example.com",
  },
  {
    id: 51,
    serialNo: 51,
    userName: "Aaron Baker",
    userCode: "AB051",
    email: "aaron.b@example.com",
  },
  {
    id: 52,
    serialNo: 52,
    userName: "Brenda King",
    userCode: "BK052",
    email: "brenda.k@example.com",
  },
  {
    id: 53,
    serialNo: 53,
    userName: "Chris Green",
    userCode: "CG053",
    email: "chris.g@example.com",
  },
  {
    id: 54,
    serialNo: 54,
    userName: "Dana Hall",
    userCode: "DH054",
    email: "dana.h@example.com",
  },
  {
    id: 55,
    serialNo: 55,
    userName: "Eric White",
    userCode: "EW055",
    email: "eric.w@example.com",
  },
  {
    id: 56,
    serialNo: 56,
    userName: "Felicia Adams",
    userCode: "FA056",
    email: "felicia.a@example.com",
  },
  {
    id: 57,
    serialNo: 57,
    userName: "Gary Miller",
    userCode: "GM057",
    email: "gary.m@example.com",
  },
  {
    id: 58,
    serialNo: 58,
    userName: "Holly Taylor",
    userCode: "HT058",
    email: "holly.t@example.com",
  },
  {
    id: 59,
    serialNo: 59,
    userName: "Ian Thomas",
    userCode: "IT059",
    email: "ian.t@example.com",
  },
  {
    id: 60,
    serialNo: 60,
    userName: "Jessica Moore",
    userCode: "JM060",
    email: "jessica.m@example.com",
  },
  {
    id: 61,
    serialNo: 61,
    userName: "Kevin Young",
    userCode: "KY061",
    email: "kevin.y@example.com",
  },
  {
    id: 62,
    serialNo: 62,
    userName: "Linda Harris",
    userCode: "LH062",
    email: "linda.h@example.com",
  },
  {
    id: 63,
    serialNo: 63,
    userName: "Mike Clark",
    userCode: "MC063",
    email: "mike.c@example.com",
  },
  {
    id: 64,
    serialNo: 64,
    userName: "Nancy Lewis",
    userCode: "NL064",
    email: "nancy.l@example.com",
  },
  {
    id: 65,
    serialNo: 65,
    userName: "Owen Scott",
    userCode: "OS065",
    email: "owen.s@example.com",
  },
  {
    id: 66,
    serialNo: 66,
    userName: "Patricia Allen",
    userCode: "PA066",
    email: "patricia.a@example.com",
  },
  {
    id: 67,
    serialNo: 67,
    userName: "Quentin Bell",
    userCode: "QB067",
    email: "quentin.b@example.com",
  },
  {
    id: 68,
    serialNo: 68,
    userName: "Rebecca Turner",
    userCode: "RT068",
    email: "rebecca.t@example.com",
  },
  {
    id: 69,
    serialNo: 69,
    userName: "Steve Adams",
    userCode: "SA069",
    email: "steve.a@example.com",
  },
  {
    id: 70,
    serialNo: 70,
    userName: "Tracy Hill",
    userCode: "TH070",
    email: "tracy.h@example.com",
  },
];

const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  let navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/users/view/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/users/edit/${id}`);
  };

  const filteredUsers = usersData.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    { field: "serialNo", headerName: "S.No.",width:100 },
    { field: "userName", headerName: "User Name", width:200},
    { field: "userCode", headerName: "User Code",width:200 },
    { field: "email", headerName: "User Email", width:200 },
    {
      field: "viewButton",
      headerName: "View",
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleViewClick(params.row.id)}
        >
          View{" "}
        </Button>
      ),
    },
    {
      field: "editButton",
      headerName: "Edit",
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleEditClick(params.row.id)}
        >
          Edit{" "}
        </Button>
      ),
    },
  ];

  const breadcrumbItems = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Users', path: '/users' },
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
        <BreadCrums items = {breadcrumbItems} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={{xs:'column-reverse', md:'row'}}
        gap={{xs:'20px'}}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TextField
          variant="outlined"
          placeholder="Search Users..."
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
          onClick={()=>{navigate("/users/create");}}
          startIcon={<AddIcon />}
          sx={{
            textTransform: "none",
          }}
        >
          Create New User
        </Button>
      </Box>
      <Box flex={1} sx={{ overflowY: "hidden" }} maxHeight={'100%'}>
        <DataGrid
          rows={filteredUsers}
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