
import { Link, Outlet, NavLink, useLocation } from 'react-router-dom';
import './TDA-styles/TDA.css'
import Logo from './apps-components/Logo';




export default function TeacherDigitalAgencyLayout() {
    const location = useLocation();
    const isQuestsPage = location.pathname === '/teacher_digital_agency/quests';
   

    return (
    <div className="teacher-digital-agency-layout" >
            <nav className="teacher-digital-agency-nav">
                <Logo />
                <div className="tda-nav-links">
                    <div className = "tda-nav-links-A">


                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link nonActive')} to="/teacher_digital_agency/dashboard"
                        
                        >
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> Přehled</NavLink>



                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link nonActive')} to="/teacher_digital_agency/profile">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Profil</NavLink>


                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link nonActive')} to="/teacher_digital_agency/quests">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list-icon lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg> Kurzy</NavLink>


                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link nonActive')} to="/teacher_digital_agency/leaderboard">
                        
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg> Žebříček</NavLink>

                    </div>
                    <div className = "tda-nav-links-B">



                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link nonActive')} to="/teacher_digital_agency/credits">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Poděkování</NavLink>


                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link nonActive')} to="/teacher_digital_agency/settings">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg> Nastavení</NavLink>



                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link nonActive')} to="/">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-door-open-icon lucide-door-open"><path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/></svg> Odhlásit se</NavLink>


                    </div>
                </div>
            </nav>
          
            <div className="Outlet">
                            {/* change here class between "background-container" and "background-container-quests" based on if quest navlink is active or not. Do the logic here */}
                            <div className={isQuestsPage ? 'background-container-quests' : 'background-container'}>
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