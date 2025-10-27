import { useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './devquest-styles/DevQuest.css'
import Logo from './devquest-components/Logo';

export default function Devquest() {

    const changeActive = (e) => {
        const links = document.querySelectorAll('.link');
        links.forEach(link => {
            link.classList.remove('active');
            link.classList.add('nonActive');
        });
        e.target.classList.remove('nonActive');
        e.target.classList.add('active');
    }

    useEffect(() => {
        const links = document.querySelectorAll(".link");
        links.forEach(link => {
            link.addEventListener("click", changeActive);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener("click", changeActive);
            });
        }
    }, [])

    return (
        <div className="devquest-layout" >
            <nav className="devquest-nav">
                <Logo />
                <div className="devquets-nav-links">
                    <div className = "devquest-nav-links-A">
                        <Link className='link active' to="/devquest/dashboard">Dashboard</Link>
                        <Link className='link nonActive' to="/devquest/profile">Profile</Link>
                        <Link className='link nonActive' to="/devquest/quests">Quests</Link>
                        <Link className='link nonActive' to="/devquest/leaderboard">Leaderboard</Link>
                    </div>
                    <div className = "devquest-nav-links-B">
                        <Link className='link nonActive' to="/devquest/credits">Credits</Link>
                        <Link className='link nonActive' to="/devquest/settings">Settings</Link>
                        <Link className="logout" to="/">Logout</Link>
                    </div>
                </div>
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