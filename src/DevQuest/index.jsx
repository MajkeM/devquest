import { Link, Outlet } from 'react-router-dom';
import './devquest-styles/DevQuest.css'
import "./../styles/App.css";

export default function Devquest() {

    return (
        <div className="devquest-layout" >
            <nav className="devquest-nav">
                <Link className='link' to="/devquest/dashboard">Dashboard</Link>
                <Link className='link' to="/devquest/profile">Profile</Link>
                <Link className='link' to="/devquest/quests">Quests</Link>
                <Link className='link' to="/devquest/leaderboard">Leaderboard</Link>
                <Link className='link' to="/devquest/settings">Settings</Link>
                <Link className='link' to="/devquest/credits">Credits</Link>
            </nav>
            <div className="Outlet">
                
                <div className="background-container">
                    <Outlet />
                    <div className="blob blob-purple-base"></div>
                    <div className="blob blob-magenta-main"></div>


                    <div className="blob blob-lavender-bridge"></div>
                    <div className="blob blob-orchid-glow"></div>


                    <div className="blob blob-blue-aura"></div>
                    <div className="blob blob-blue-main"></div>
                    <div className="blob blob-blue-hotspot"></div>
                </div>
            </div>
        </div>
    )
}