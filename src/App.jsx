import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import './styles/App.css'

import Login from './Login';
import Register from './Register';
import Devquest from './DevQuest';
import Welcome from './Welcome';
import Profile from './DevQuest/Profile';
import Quests from './DevQuest/Quests';
import Dashboard from './DevQuest/Dashboard';
import Leaderboard from './DevQuest/Leaderboard';
import Settings from './DevQuest/Settings';
import Credits from './DevQuest/Credits';




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  path="/devquest/*" element={<Devquest />} >
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
