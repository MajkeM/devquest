import NameDashboard  from '../apps-components/NameDashboard';
import {useState, useEffect} from "react";
import { useSelector } from "react-redux";
 

import "./Dashboard.css";

import CircularBar from "../apps-components/CircularBar";
import CourseProgressOverview from "../apps-components/CourseProgressOverview";


export default function Dashboard() {

    const Level = useSelector((state) => state.counterXpLevel.level);
    const xpPoints = useSelector((state) => state.counterXpLevel.xp);
    const streak = useSelector((state) => state.counterStreak.streak);



// mottos are set inside useEffect to avoid hook dependency warnings
const [motto, setMotto] = useState(null);
useEffect(() => {
        const mottos = [

            // here I want only mottos 
            <p><span className="highlight">Učte</span> se pravidelně — malý pokrok každý den se počítá.</p>,
            <p>Projděte si materiály, vyzkoušejte aktivitu a sdílejte otázky s lektorem.</p>,
            <p>Nebojte se chyb — jsou to příležitosti k učení.</p>,
            <p>Pokrok je důležitější než dokonalost.</p>,
            <p>Malé úspěchy vedou k velkým výsledkům.</p>,
            <p>Spolupráce s lektorem vám přinese nejvíce hodnoty.</p>,
            <p>Zaměřte se na porozumění, ne jen na výsledky.</p>,
            <p>Opakování a praxe jsou klíčem k zapamatování.</p>,
            <p>Učte se společně — podpora od komunity pomáhá růst.</p>
        ];
        const index = Math.floor(Math.random() * mottos.length);
        setMotto(mottos[index]);
}, []);


return (
    <div style={{width:"100%", height:"100%"}}>
        <div className="dashboard">
            <div className="Name">
                <NameDashboard     />
            </div>
            <div className="Streak boxed">
                <div className="dashboard-box"> 
                   <div className="streak-content">
                    <h3 className="streak-title">Série</h3>
                    <div className="streak-number-container">
                        <span className="streak-number">{streak}</span>
                        <span className="streak-fire">🔥</span>
                    </div>
                   </div>
                </div>
            </div>
            <div className="Level boxed">
                <div className="dashboard-box"> 
                    <h3 className="level-title">Úroveň</h3>
                    <CircularBar value={Level} percent={xpPoints} />
                    
                </div>
            </div>
            <div className="Motto boxed">
                <div className="dashboard-box"> 
                    <h3 className="motto-title">Motivace 👌</h3>
                    <span className="motto">{motto}</span>
                </div>
            </div>
            <div className="Skills boxed">
                <div className="dashboard-box"> 
                    <CourseProgressOverview />
                </div>
            </div>
        </div>
    </div>
)
}