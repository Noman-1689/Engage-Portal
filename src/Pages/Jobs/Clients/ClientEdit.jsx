import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import moment from "moment";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";
import BreadCrums from '../../../Components/BreadCrums'

const ClientEdit = () => {
  const [selectedCron, setSelectedCron] = useState("sales_manager");
  const [selectedClient, setSelectedClient] = useState("fusion_dynamics");
  const [startTime, setStartTime] = useState(moment().hour(19).minute(0));
  // const [endTime, setEndTime] = useState(moment().hour(9).minute(0));
  const [active, setActive] = useState(true);
  const companyNames = [
    { value: "alpha_corp", label: "Alpha Corp" },
    { value: "beta_inc", label: "Beta Inc" },
    { value: "gamma_ltd", label: "Gamma Ltd" },
    { value: "delta_co", label: "Delta Co" },
    { value: "epsilon_enterprises", label: "Epsilon Enterprises" },
    { value: "fusion_dynamics", label: "Fusion Dynamics" },
    { value: "galaxy_systems", label: "Galaxy Systems" },
    { value: "horizon_innovations", label: "Horizon Innovations" },
    { value: "infinity_solutions", label: "Infinity Solutions" },
    { value: "jupiter_tech", label: "Jupiter Tech" },
    { value: "krypton_labs", label: "Krypton Labs" },
    { value: "lunar_ventures", label: "Lunar Ventures" },
    { value: "magna_corp", label: "Magna Corp" },
    { value: "nexus_group", label: "Nexus Group" },
    { value: "orion_systems", label: "Orion Systems" },
    { value: "phoenix_solutions", label: "Phoenix Solutions" },
    { value: "quasar_tech", label: "Quasar Tech" },
    { value: "radiant_innovations", label: "Radiant Innovations" },
    { value: "stellar_dynamics", label: "Stellar Dynamics" },
    { value: "titan_enterprises", label: "Titan Enterprises" },
    { value: "andromeda_corp", label: "Andromeda Corp" },
    { value: "borealis_inc", label: "Borealis Inc" },
    { value: "celestial_ltd", label: "Celestial Ltd" },
    { value: "dynamo_co", label: "Dynamo Co" },
    { value: "everest_solutions", label: "Everest Solutions" },
    { value: "flare_systems", label: "Flare Systems" },
    { value: "global_nexus", label: "Global Nexus" },
    { value: "hyperion_inc", label: "Hyperion Inc" },
    { value: "ion_innovations", label: "Ion Innovations" },
    { value: "jubilee_corp", label: "Jubilee Corp" },
    { value: "kinetic_solutions", label: "Kinetic Solutions" },
    { value: "lumen_tech", label: "Lumen Tech" },
    { value: "monarch_group", label: "Monarch Group" },
    { value: "nimbus_systems", label: "Nimbus Systems" },
    { value: "opal_ventures", label: "Opal Ventures" },
    { value: "pinnacle_corp", label: "Pinnacle Corp" },
    { value: "quantum_ltd", label: "Quantum Ltd" },
    { value: "rift_solutions", label: "Rift Solutions" },
    { value: "summit_inc", label: "Summit Inc" },
    { value: "terra_enterprises", label: "Terra Enterprises" },
    { value: "unity_systems", label: "Unity Systems" },
    { value: "vortex_corp", label: "Vortex Corp" },
    { value: "waypoint_inc", label: "Waypoint Inc" },
    { value: "xenon_labs", label: "Xenon Labs" },
    { value: "yield_solutions", label: "Yield Solutions" },
    { value: "zenith_group", label: "Zenith Group" },
    { value: "aether_dynamics", label: "Aether Dynamics" },
    { value: "breeze_innovations", label: "Breeze Innovations" },
    { value: "cascade_systems", label: "Cascade Systems" },
    { value: "dawn_enterprises", label: "Dawn Enterprises" },
    { value: "echo_corp", label: "Echo Corp" },
    { value: "facet_inc", label: "Facet Inc" },
    { value: "glide_ltd", label: "Glide Ltd" },
    { value: "helix_co", label: "Helix Co" },
    { value: "iris_solutions", label: "Iris Solutions" },
    { value: "jade_systems", label: "Jade Systems" },
    { value: "kite_ventures", label: "Kite Ventures" },
    { value: "lark_corp", label: "Lark Corp" },
    { value: "mystic_inc", label: "Mystic Inc" },
    { value: "nova_ltd", label: "Nova Ltd" },
    { value: "onyx_co", label: "Onyx Co" },
    { value: "pulse_enterprises", label: "Pulse Enterprises" },
    { value: "quill_corp", label: "Quill Corp" },
    { value: "river_inc", label: "River Inc" },
    { value: "skyline_ltd", label: "Skyline Ltd" },
    { value: "trailblazer_co", label: "Trailblazer Co" },
    { value: "utopia_systems", label: "Utopia Systems" },
    { value: "vanguard_corp", label: "Vanguard Corp" },
    { value: "whisper_inc", label: "Whisper Inc" },
    { value: "xcelerate_ltd", label: "Xcelerate Ltd" },
  ];
  const jobTitles = [
    { value: "chief_executive_officer", label: "Chief Executive Officer" },
    { value: "chief_operating_officer", label: "Chief Operating Officer" },
    { value: "chief_financial_officer", label: "Chief Financial Officer" },
    { value: "project_manager", label: "Project Manager" },
    { value: "product_manager", label: "Product Manager" },
    { value: "operations_manager", label: "Operations Manager" },
    { value: "human_resources_manager", label: "Human Resources Manager" },
    { value: "marketing_manager", label: "Marketing Manager" },
    { value: "sales_manager", label: "Sales Manager" },
    { value: "business_analyst", label: "Business Analyst" },
    { value: "consultant", label: "Consultant" },
    { value: "account_manager", label: "Account Manager" },
    { value: "software_engineer", label: "Software Engineer" },
    { value: "data_scientist", label: "Data Scientist" },
    { value: "machine_learning_engineer", label: "Machine Learning Engineer" },
    { value: "devops_engineer", label: "DevOps Engineer" },
    { value: "front_end_developer", label: "Front-End Developer" },
    { value: "back_end_developer", label: "Back-End Developer" },
    { value: "full_stack_developer", label: "Full-Stack Developer" },
    { value: "ui_ux_designer", label: "UI/UX Designer" },
    { value: "network_administrator", label: "Network Administrator" },
    { value: "systems_administrator", label: "Systems Administrator" },
    { value: "cybersecurity_analyst", label: "Cybersecurity Analyst" },
    { value: "it_support_specialist", label: "IT Support Specialist" },
    { value: "cloud_architect", label: "Cloud Architect" },
    { value: "doctor", label: "Doctor" },
    { value: "nurse", label: "Nurse" },
    { value: "surgeon", label: "Surgeon" },
    { value: "pharmacist", label: "Pharmacist" },
    { value: "dentist", label: "Dentist" },
    { value: "physical_therapist", label: "Physical Therapist" },
    { value: "occupational_therapist", label: "Occupational Therapist" },
    { value: "medical_assistant", label: "Medical Assistant" },
    { value: "lab_technician", label: "Lab Technician" },
    { value: "radiologist", label: "Radiologist" },
    { value: "psychologist", label: "Psychologist" },
    { value: "graphic_designer", label: "Graphic Designer" },
    { value: "web_designer", label: "Web Designer" },
    { value: "content_creator", label: "Content Creator" },
    { value: "copywriter", label: "Copywriter" },
    { value: "animator", label: "Animator" },
    { value: "video_editor", label: "Video Editor" },
    { value: "photographer", label: "Photographer" },
    { value: "illustrator", label: "Illustrator" },
    { value: "art_director", label: "Art Director" },
    { value: "creative_director", label: "Creative Director" },
    { value: "teacher", label: "Teacher" },
    { value: "professor", label: "Professor" },
    { value: "researcher", label: "Researcher" },
    { value: "librarian", label: "Librarian" },
    { value: "school_administrator", label: "School Administrator" },
    { value: "academic_advisor", label: "Academic Advisor" },
    { value: "electrician", label: "Electrician" },
    { value: "plumber", label: "Plumber" },
    { value: "carpenter", label: "Carpenter" },
    { value: "mechanic", label: "Mechanic" },
    { value: "welder", label: "Welder" },
    { value: "construction_worker", label: "Construction Worker" },
    { value: "hvac_technician", label: "HVAC Technician" },
    { value: "sales_representative", label: "Sales Representative" },
    {
      value: "customer_service_representative",
      label: "Customer Service Representative",
    },
    { value: "call_center_agent", label: "Call Center Agent" },
    { value: "retail_associate", label: "Retail Associate" },
    { value: "chef", label: "Chef" },
    { value: "cook", label: "Cook" },
    { value: "waiter_waitress", label: "Waiter/Waitress" },
    { value: "bartender", label: "Bartender" },
    { value: "hotel_manager", label: "Hotel Manager" },
    { value: "concierge", label: "Concierge" },
    { value: "housekeeper", label: "Housekeeper" },
    { value: "lawyer", label: "Lawyer" },
    { value: "paralegal", label: "Paralegal" },
    { value: "judge", label: "Judge" },
    { value: "legal_assistant", label: "Legal Assistant" },
    { value: "marketing_specialist", label: "Marketing Specialist" },
    { value: "social_media_manager", label: "Social Media Manager" },
    {
      value: "public_relations_specialist",
      label: "Public Relations Specialist",
    },
    { value: "communications_manager", label: "Communications Manager" },
    { value: "seo_specialist", label: "SEO Specialist" },
    { value: "ppc_specialist", label: "PPC Specialist" },
  ];
  const breadcrumbItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Crons", path: "/jobs/cron-clients" },
    { label: "Edit" },
  ];
  const handleSave = () => {
    console.log(startTime);
    alert("Saved");
    navigate("/jobs/cron-clients");
  };
  // const handleStartTimeChange = (event) => {
  //   setStartTime(event.target.value);
  // };
  // const handleEndTimeChange = (event) => {
  //   setEndTime(event.target.value);
  // };
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
      bgcolor={"background.paper"}
      minHeight={"100%"}
      pb={1}
    >
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        width={"80%"}
        position={"relative"}
      >
        <BreadCrums items={breadcrumbItems} />
      </Box>
      <Box width={"80%"} p={5} position={"relative"} component={Paper}>
        <Box>
          <Stack>
            <Typography variant="h4" component="h1" gutterBottom>
              Edit Client Cron
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Edit the Cron to the client below.
            </Typography>
          </Stack>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"80%"}
          p={5}
        >
          <Stack spacing={3} width={"100%"}>
            <FormControl fullWidth>
              <InputLabel>Clients</InputLabel>
              <Select
                labelId="select-Clients"
                id="select-Clients"
                value={selectedClient}
                label="Clients"
                onChange={(event) => setSelectedClient(event.target.value)}
              >
                {companyNames.map((company) => (
                  <MenuItem key={company.value} value={company.value}>
                    {company.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Crons</InputLabel>
              <Select
                labelId="select-Cron"
                id="select-Cron"
                value={selectedCron}
                label="Crons"
                onChange={(event) => setSelectedCron(event.target.value)}
              >
                {jobTitles.map((crons) => (
                  <MenuItem
                    key={crons.value}
                    value={crons.value}
                    className="font-inter"
                  >
                    {crons.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Box>
                <TimePicker
                  label="Start Time"
                  value={startTime}
                  onChange={(newValue) => setStartTime(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
                {/* <TimePicker
                  label="End Time"
                  value={endTime}
                  onChange={(newValue) => setEndTime(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                /> */}
              </Box>
            </LocalizationProvider>
            {/* <Box>
              <TextField
                id="start-time"
                label="Start Time"
                variant="outlined"
                value={startTime}
                onChange={handleStartTimeChange}
                placeholder="HH:MM" // Suggest a format
              />
              <TextField
                id="end-time"
                label="End Time"
                variant="outlined"
                value={endTime}
                onChange={handleEndTimeChange}
                placeholder="HH:MM" // Suggest a format
              />
            </Box> */}
            <Box>
              <label>Active</label>
              <Switch
                checked={active}
                onChange={(event) => setActive(event.target.checked)}
              />
            </Box>
          </Stack>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"} gap={2} mt={3}>
          <Button
            variant="outlined"
            onClick={() => navigate("/jobs/cron-clients")}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            startIcon={<SaveIcon />}
          >
            save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientEdit;
