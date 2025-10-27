import {useState, useEffect} from "react";

import "./Dashboard.css";

import CircularBar from "./../devquest-components/CircularBar";
import SkillsXp from "./../devquest-components/SkillsXp";


export default function Dashboard() {

const mottos = [
    <p><span className="highlight">Code</span> is written in silence - respect is earned in <span className="highlight">commits</span></p>,
    <p>Your <span className="highlight">first code was trash</span>. So was everyone else’s. <span className="highlight">Keep pushing</span>.</p>,
    <p>You don’t <span className="highlight">learn</span> to code by watching — you learn <span className="highlight">how by breaking things</span>.</p>,
    <p><span className="highlight">Real devs</span> don’t chase perfection. They <span className="highlight">chase progress</span>.</p>,
    <p>The <span className="highlight">compiler doesn’t care about</span> your <span className="highlight">excuses</span>.</p>,
    <p><span className="highlight">Every bug</span> you fix <span className="highlight">rewires</span> your <span className="highlight">brain</span> to think <span className="highlight">sharper</span>.</p>,
    <p>Most quit before their breakthrough. <span className="highlight">Don’t</span>.</p>,
    <p><span className="highlight">If</span> it <span className="highlight">was easy</span>, AI would’ve already <span className="highlight">replaced you</span>.</p>,
    <p>One day, your code will outlive you. <span className="highlight">Make it worth reading</span>.</p>


];
const [motto, setMotto] = useState(null);
const randomMotto = () => {
    const index = Math.floor(Math.random() * mottos.length);
    return mottos[index];
}



useEffect(() => {
    setMotto(randomMotto());
}, []);


return (
    <div style={{width:"100%", height:"100%"}}>
        <div className="dashboard">
            <div className="Name">
                <h2 className="welcome-back">Welcome back, <br/><span className="name-of-user">NAME</span> </h2>
            </div>
            <div className="Streak boxed">
                <div className="dashboard-box"> 
                   <div>
                    <h3 className="streak-title">Your streak</h3>
                    <div className="streak-number-container">
                        <span className="streak-number">0</span>
                        <span className="streak-fire">🔥</span>
                    </div>
                   </div>
                </div>
            </div>
            <div className="Level boxed">
                <div className="dashboard-box"> 
                    <h3 className="level-title">Your level</h3>
                    <CircularBar value={1} percent={50} />
                    
                </div>
            </div>
            <div className="Motto boxed">
                <div className="dashboard-box"> 
                    <h3 className="motto-title">Motivation 👌</h3>
                    <span className="motto">{motto}</span>
                </div>
            </div>
            <div className="Skills boxed">
                <div className="dashboard-box"> 
                    <SkillsXp />
                </div>
            </div>
        </div>
    </div>
)
}