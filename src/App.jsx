import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import './styles/App.css'

import Login from './Login';
import Register from './Register';
import TDA from './TeacherDigitalAgency';
import Welcome from './Welcome';
import Profile from './TeacherDigitalAgency/Profile';
import Quests from './TeacherDigitalAgency/Quests';
import Dashboard from './TeacherDigitalAgency/Dashboard';
import Leaderboard from './TeacherDigitalAgency/Leaderboard';
import Settings from './TeacherDigitalAgency/Settings';
import Credits from './TeacherDigitalAgency/Credits';




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher_digital_agency/*" element={<TDA />} >
          <Route path="profile" element={<Profile />} />
          <Route path="quests" element={<Quests />} />
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="credits" element={<Credits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )}


export default App;
