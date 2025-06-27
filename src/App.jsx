import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import CustomerList from "./Pages/Customers/CustomerList";
import CustomerEdit from "./Pages/Customers/CustomerEdit";
import Login from "./Pages/Authentication/Login";
import Home from "./Pages/DashBoard/DashBoardHome";
import CustomerView from "./Pages/Customers/CustomerView";
import UserList from "./Pages/Users/UserList";
import UserEdit from "./Pages/Users/UserEdit";
import UserView from "./Pages/Users/UserView";
import CustomerCreate from "./Pages/Customers/CustomerCreate";
import UserCreate from "./Pages/Users/UserCreate";
import Jobs from "./Pages/Jobs/Jobs/JobsList";
import JobView from "./Pages/Jobs/Jobs/JobsView";
import JobEdit from "./Pages/Jobs/Jobs/JobEdit";
import JobCreate from "./Pages/Jobs/Jobs/JobCreate";
import Clients from "./Pages/Jobs/Clients/Clients";
import ClientCreate from "./Pages/Jobs/Clients/ClientCreate";
import ClientEdit from "./Pages/Jobs/Clients/ClientEdit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path="edit/:id" element={<CustomerEdit />} />
            <Route path="view/:id" element={<CustomerView />} />
            <Route path="create" element={<CustomerCreate />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path="edit/:id" element={<UserEdit />} />
            <Route path="view/:id" element={<UserView />} />
            <Route path="create" element={<UserCreate />} />
          </Route>
          <Route path="jobs">
            <Route path="crons">
              <Route index element={<Jobs />} />
              <Route path="view/:id" element={<JobView />} />
              <Route path="edit/:id" element={<JobEdit />} />
              <Route path="create" element={<JobCreate />} />
            </Route>
            <Route path="cron-clients">
              <Route index element={<Clients />} />
              <Route path="create" element={<ClientCreate />} />
              <Route path="edit/:id" element={<ClientEdit />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
