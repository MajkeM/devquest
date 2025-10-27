import "./../devquest-styles/DevQuest.css"


export default function Logo() {
    return (
        <div style={{width:"100%", height:"30%", display:"flex", alignItems:"center"}}>
            <h2 style={{margin:"0 auto 0 15%", color: "#DBDBDB", fontSize: "clamp(5%, 5vw,80px)",fontFamily:"Satoshi", fontWeight: "normal", lineHeight: "clamp(20px, 50%, 70px)", textAlign: "left", width:"60%",  }} >Dev <span style={{ color: "#888787", fontSize: "clamp(5%, 3vw,60px)", fontWeight: "thin" }} >Quest</span></h2>

        </div>
    )
}