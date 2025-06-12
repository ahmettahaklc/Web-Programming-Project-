import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import TopBar from './pages/TopBar';
import Login from "./pages/Login";
import Communication from "./pages/Communicaton";
import ClientManagementPage from "./pages/ClientManagementPage";
import CaseManagementPage from "./pages/CaseManagementPage";
import Dashboard from "./pages/Dashboard";
import AddClientPage from "./pages/AddClientPage";
import EditClientPage from "./pages/EditClientPage";
import EditCasePage from "./pages/EditCasePage";
import AddCasePage from "./pages/AddCasePage";

function App() {
  return (  
    <Router>
      <TopBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard/>} />  
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Comunication" element={<Communication />} />
          <Route path="/ClientManagementPage" element={<ClientManagementPage/>}/>
          <Route path="/CaseManagementPage" element={<CaseManagementPage/>}/>
          <Route path="/EditClient/:id" element={<EditClientPage/>}/>
          <Route path="/AddClient" element={<AddClientPage/>}/>
          <Route path="/EditCase/:id" element={<EditCasePage/>}/>
          <Route path="/AddCase" element={<AddCasePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
