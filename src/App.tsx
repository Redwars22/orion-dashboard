import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { TextField, Button, Stack, Card } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import FaceIcon from '@mui/icons-material/Face';
import PollIcon from '@mui/icons-material/Poll';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { fakerPT_BR } from '@faker-js/faker';
import Brand from './global/Brand';
import LoginScreen from './screens/Login/Login';
import Menu from './screens/Dashboard/Menu/Menu';
import HomeScreen from './screens/Dashboard/Home.screen';
import ClientsScreen from "./screens/Clients/Clients.screen";
import FinancesScreen from './screens/Finances/Finances.screen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SettingsScreen from './screens/Settings/Settings.screen';
import AnalyticsScreen from "./screens/Analytics/Analytics.screen";
import ProjectsScreen from "./screens/Projects/Projects.screen";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const ScreenWithMenu = ({ children }: { children: React.ReactNode }) => {
    return (
      <div style={{ display: "flex", maxWidth: "100vw", maxHeight: "100vh" }}>
        <Menu />
        <div style={{ backgroundColor: "#141414" }}>{children}</div>
      </div>
    )
  }

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/dashboard" element={<ScreenWithMenu children={<HomeScreen />} />} />
          <Route path="/clients" element={<ScreenWithMenu children={<ClientsScreen />} />} />
          <Route path="/finances" element={<ScreenWithMenu children={<FinancesScreen />} />} />
          <Route path="/settings" element={<ScreenWithMenu children={<SettingsScreen />} />} />
          <Route path="/analytics" element={<ScreenWithMenu children={<AnalyticsScreen />} />} />
          <Route path="/projects" element={<ScreenWithMenu children={<ProjectsScreen />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
