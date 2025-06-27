import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BreadCrums from "../../Components/BreadCrums"

const CustomerEdit = () => {
  const initialFeatures = {
    Places: [
      { id: "hierarchy", name: "Hierarchy", enabled: false, disabled: false },
      { id: "attributes", name: "Attributes", enabled: false, disabled: false },
      {
        id: "place-template",
        name: "Place Template",
        enabled: false,
        disabled: false,
      },
      { id: "place", name: "Place", enabled: false, disabled: false },
      {
        id: "places-group",
        name: "Places Group",
        enabled: false,
        disabled: false,
      },
      {
        id: "kpis",
        name: "KPIs (deprecated)",
        enabled: false,
        disabled: false,
      },
      {
        id: "place-metrics",
        name: "KPIs (deprecated)",
        enabled: false,
        disabled: false,
      },
      { id: "place-kpis", name: "Place KPIs", enabled: false, disabled: false },
    ],
    UserBases: [
      {
        id: "user_hierarchy",
        name: "User Hierarchy",
        enabled: false,
        disabled: false,
      },
      {
        id: "custom_users",
        name: "Custom Users",
        enabled: false,
        disabled: false,
      },
      { id: "role_group", name: "Role Group", enabled: false, disabled: false },
      { id: "reps", name: "Reps", enabled: false, disabled: false },
      { id: "supervisor", name: "Supervisor", enabled: false, disabled: false },
      { id: "agency", name: "Agency", enabled: false, disabled: false },
    ],
    Tasks: [
      { id: "template", name: "Template", enabled: false, disabled: false },
      { id: "task", name: "Task", enabled: false, disabled: false },
      { id: "list", name: "List", enabled: false, disabled: false },
      {
        id: "list_assortment",
        name: "List Assortment",
        enabled: false,
        disabled: false,
      },
      {
        id: "task_reorder_of_template",
        name: "Task Reorder Of Template",
        enabled: false,
        disabled: false,
      },
      {
        id: "task_survey_funnels",
        name: "Task Survey Funnels",
        enabled: false,
        disabled: false,
      },
    ],
    Program: [
      { id: "programs", name: "Programs", enabled: false, disabled: false },
      {
        id: "program_management",
        name: "Program Management",
        enabled: false,
        disabled: false,
      },
    ],
    Operations: [
      { id: "newsfeed", name: "Newsfeed", enabled: false, disabled: false },
      { id: "beats", name: "Beats", enabled: false, disabled: false },
      {
        id: "beat_management",
        name: "Beat Management",
        enabled: false,
        disabled: false,
      },
      {
        id: "visit_generation",
        name: "Visit Generation",
        enabled: false,
        disabled: false,
      },
      {
        id: "unscheduled",
        name: "Unscheduled",
        enabled: false,
        disabled: false,
      },
      { id: "leaves", name: "Leaves", enabled: false, disabled: false },
      {
        id: "Public Holidays",
        name: "Public Holidays",
        enabled: false,
        disabled: false,
      },
    ],
    GeoTagging: [
      {
        id: "tagged_places",
        name: "Tagged Places",
        enabled: false,
        disabled: false,
      },
      {
        id: "tagging_tasks",
        name: "Tagging Tasks",
        enabled: false,
        disabled: false,
      },
      {
        id: "tagging_programs",
        name: "Tagging Programs",
        enabled: false,
        disabled: false,
      },
      {
        id: "tagging_assignments",
        name: "Tagging Assignments",
        enabled: false,
        disabled: false,
      },
      {
        id: "quality_control",
        name: "Quality Control",
        enabled: false,
        disabled: false,
      },
    ],
    ReviewQC: [
      {
        id: "qc_dashboard",
        name: "QC Dashboard",
        enabled: false,
        disabled: false,
      },
      { id: "qc_verify", name: "QC Verify", enabled: false, disabled: false },
    ],
    Reports: [
      {
        id: "external_report",
        name: "External Report",
        enabled: false,
        disabled: false,
      },
    ],
    Settings: [
      {
        id: "system_logs",
        name: "System Logs",
        enabled: false,
        disabled: false,
      },
      {
        id: "app_settings",
        name: "App Settings",
        enabled: false,
        disabled: false,
      },
      {
        id: "reports_schedule",
        name: "Reports Schedule",
        enabled: false,
        disabled: false,
      },
      {
        id: "reports_subscription",
        name: "Reports Subscription",
        enabled: false,
        disabled: false,
      },
      {
        id: "system_logs",
        name: "System Logs",
        enabled: false,
        disabled: false,
      },
      {
        id: "qc_management",
        name: "QC Management",
        enabled: false,
        disabled: false,
      },
    ],
    CRM: [
      {
        id: "crm_lead_managements",
        name: "CRM Lead Managements",
        enabled: false,
        disabled: false,
      },
      {
        id: "crm_lead_categories",
        name: "CRM Lead Categories",
        enabled: false,
        disabled: false,
      },
      {
        id: "crm_lead_organizations",
        name: "CRM Lead Organizations",
        enabled: false,
        disabled: false,
      },
    ],
    COMMS: [
      {
        id: "comms_info_genie",
        name: "COMMS Info Genie",
        enabled: false,
        disabled: false,
      },
      {
        id: "comms_broadcast",
        name: "COMMS Broadcast",
        enabled: false,
        disabled: false,
      },
    ],
    TicketsSystem: [
      {
        id: "ticket_management",
        name: "Ticket Management",
        enabled: false,
        disabled: false,
      },
      {
        id: "ticket_archive",
        name: "Ticket Archive",
        enabled: false,
        disabled: false,
      },
    ],
  };

  const [features, setFeatures] = useState(initialFeatures);
  const [companyName, setCompanyName] = useState("Acme Corporation");
  const [companyCode, setCompanyCode] = useState("ACME-001");
  const [masterToggles, setMasterToggles] = useState({
    Places: false,
    UserBases: false,
    Tasks: false,
    Program: false,
    Operations: false,
    GeoTagging: false,
    ReviewQC: false,
    Reports: false,
    Settings: false,
    Crm: false,
    Comms: false,
    TicketsSystem: false,
  });
  const [MobileToggles, setMobileToggles] = useState({
    Places: false,
    UserBases: false,
    Tasks: false,
    Program: false,
    Operations: false,
    GeoTagging: false,
    ReviewQC: false,
    Reports: false,
    Settings: false,
    CRM: false,
    COMMS: false,
    TicketsSystem: false,
  });
  const breadcrumbItems = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Customers',path:'/customers' },
    { label: 'Edit' },
  ];

  const handleMasterToggleChange = (categoryName) => (event) => {
    const isChecked = event.target.checked;
    setMasterToggles((prev) => ({
      ...prev,
      [categoryName]: isChecked,
    }));

    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [categoryName]: prevFeatures[categoryName].map((feature) => ({
        ...feature,
      })),
    }));
  };
  const handleMobileToggleChange = (categoryName) => (event) => {
    console.log(event.target.checked);
    setMobileToggles((prevToggles) => ({
      ...prevToggles,
      [categoryName]: event.target.checked,
    }));
  };

  const handleFeatureToggleChange = (categoryName, featureId) => (event) => {
    const isChecked = event.target.checked;
    setFeatures((prevFeatures) => {
      const updatedFeaturesForCategory = prevFeatures[categoryName].map(
        (feature) =>
          feature.id === featureId
            ? { ...feature, enabled: isChecked }
            : feature
      );

      // Update master toggle based on individual feature changes
      const anyFeatureEnabled = updatedFeaturesForCategory.some(
        (feature) => feature.enabled
      );

      setMasterToggles((prevMasterToggles) => ({
        ...prevMasterToggles,
        [categoryName]: anyFeatureEnabled,
      }));

      return {
        ...prevFeatures,
        [categoryName]: updatedFeaturesForCategory,
      };
    });
  };

  let navigate = useNavigate();

  const handleSave = () => {
    console.log("Saving data:", {
      companyName,
      companyCode,
      features,
    });
    // Implement save logic here
    alert("Customer details and features saved!");
    navigate('/customers')
  };

  const [value, setValue] = React.useState("1");

  const TabHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      // height={"100%"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={3 / 2}
      bgcolor={"background.paper"}
      p={2}
    >
      <Box
        display={"flex"}
        justifyContent={"left"}
        width={{ xs: "100%", md: "80%" }}
        pb={2}
        position={'relative'}
      >
        <BreadCrums items = {breadcrumbItems} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"left"}
        gap={5 / 2}
        alignItems={"left"}
        component={Paper}
        width={{ xs: "100%", md: "80%" }}
        flex={1}
        padding={5}
        position={'relative'}
      >
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Edit Customer Details
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Update the information for this customer below.
          </Typography>
        </Box>
        <Box>
          <Stack spacing={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Customer Information
            </Typography>
            <TextField
              fullWidth
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              variant="outlined"
              helperText="Enter the full legal company name"
            />
            <TextField
              fullWidth
              label="Company Code"
              value={companyCode}
              onChange={(e) => setCompanyCode(e.target.value)}
              variant="outlined"
              helperText="Internal company identifier"
            />
          </Stack>
        </Box>
        <Box>
          <Stack spacing={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Features
            </Typography>
          </Stack>
        </Box>
        {/* ------------------------------------------------------------------- */}
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={TabHandleChange}>
                <Tab label="Web App" value="1" />
                <Tab label="Mobile App" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box display={"flex"} gap={3 / 2} flexWrap={"wrap"}>
                {Object.keys(features).map((categoryName) => (
                  <Box
                    key={categoryName}
                    padding={2}
                    width={{ xs: "100%", md: "100%", lg: "49%" }}
                    component={Paper}
                  >
                    <Stack>
                      <Box
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems="center"
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="text.primary"
                          >
                            {categoryName}
                          </Typography>
                        </Box>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={masterToggles[categoryName]}
                              onChange={handleMasterToggleChange(categoryName)}
                              id={`${categoryName.toLowerCase()}-master-toggle`}
                            />
                          }
                          label=""
                          labelPlacement="start"
                        />
                      </Box>
                      <Box>
                        {features[categoryName].map((feature) => (
                          <Box
                            key={feature.id}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Box>
                              <Typography
                                variant="subtitle1"
                                fontWeight="medium"
                                color="text.primary"
                              >
                                {feature.name}
                              </Typography>
                            </Box>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={feature.enabled}
                                  onChange={handleFeatureToggleChange(
                                    categoryName,
                                    feature.id
                                  )}
                                  id={feature.id}
                                  disabled={
                                    feature.disabled ||
                                    !masterToggles[categoryName]
                                  }
                                />
                              }
                              label=""
                              labelPlacement="start"
                            />
                          </Box>
                        ))}
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box display={"flex"} gap={3 / 2} flexWrap={"wrap"}>
                {Object.keys(MobileToggles).map((categoryName) => (
                  <Box
                    key={categoryName}
                    padding={2}
                    width={{ xs: "100%", md: "100%", lg: "49%" }}
                    component={Paper}
                  >
                    <Stack>
                      <Box
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems="center"
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="text.primary"
                          >
                            {categoryName}
                          </Typography>
                        </Box>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={MobileToggles[categoryName]}
                              onChange={handleMobileToggleChange(categoryName)}
                              id={`${categoryName.toLowerCase()}-master-toggle`}
                            />
                          }
                          label=""
                          labelPlacement="start"
                        />
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"} gap={2} mt={3}>
          <Button variant="outlined" onClick={()=>navigate("/customers")}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave} >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerEdit;
