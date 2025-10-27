import "./../devquest-styles/SkillsXp.css";
import { useSelector } from "react-redux";


export default function SkillsXp() {

        // today's xp progress
        const cyberXpToday = useSelector((state) => state.counterProgressXpToday.cyber);
        const frontendXpToday = useSelector((state) => state.counterProgressXpToday.frontend);
        const backendXpToday = useSelector((state) => state.counterProgressXpToday.backend);
        const itXpToday = useSelector((state) => state.counterProgressXpToday.it);
        const algorythmsXpToday = useSelector((state) => state.counterProgressXpToday.algorythms);
    
        // this week's xp progress
        const cyberXpThisWeek = useSelector((state) => state.counterProgressXpThisWeek.cyber);
        const frontendXpThisWeek = useSelector((state) => state.counterProgressXpThisWeek.frontend);
        const backendXpThisWeek = useSelector((state) => state.counterProgressXpThisWeek.backend);
        const itXpThisWeek = useSelector((state) => state.counterProgressXpThisWeek.it);
        const algorythmsXpThisWeek = useSelector((state) => state.counterProgressXpThisWeek.algorythms);
    
        // overall xp progress
        const cyberXpOverall = useSelector((state) => state.counterProgressXpOverall.cyber);
        const frontendXpOverall = useSelector((state) => state.counterProgressXpOverall.frontend);
        const backendXpOverall = useSelector((state) => state.counterProgressXpOverall.backend);
        const itXpOverall = useSelector((state) => state.counterProgressXpOverall.it);
        const algorythmsXpOverall = useSelector((state) => state.counterProgressXpOverall.algorythms);
    

    return (

<div className="parent">
    <div className="div1">Your <span className="highlight">progress 📈</span></div>
    <div className="div2"></div>
    <div className="div3">Today</div>
    <div className="div4">This Week</div>
    <div className="div5">Overall</div>
    <div className="div6">Frontend</div>
    <div className="div7">Backend</div>
    <div className="div8">IT</div>
    <div className="div9">Cyber</div>
    <div className="div10">Algorithms</div>

    <div className="div11">{frontendXpToday} xp</div>
    <div className="div12">{frontendXpThisWeek} xp</div>
    <div className="div13">{backendXpToday} xp</div>
    <div className="div14">{backendXpThisWeek} xp</div>
    <div className="div15">{frontendXpOverall} xp</div>
    <div className="div21">{itXpOverall} xp</div>
    <div className="div16">{backendXpOverall} xp</div>
    <div className="div17">{itXpToday} xp</div>
    <div className="div18">{itXpThisWeek} xp</div>
    <div className="div19">{cyberXpToday} xp</div>
    <div className="div20">{cyberXpThisWeek} xp</div>
    <div className="div22">{cyberXpOverall} xp</div>
    <div className="div23">{algorythmsXpToday} xp</div>  
    <div className="div24">{algorythmsXpThisWeek} xp</div>
    <div className="div25">{algorythmsXpOverall} xp</div>
</div>
    );
}
