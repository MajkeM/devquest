import "../TDA-styles/TDA.css"


export default function Logo() {
    return (
        <div style={{width:"100%", height:"30%", display:"flex", alignItems:"center"}}>
            <h2 style={{margin:"0 auto 0 15%", color: "#DBDBDB", fontSize: "clamp(5%, 3vw,80px)",fontFamily:"Satoshi", fontWeight: "normal", lineHeight: "clamp(20px, 95%, 70px)", textAlign: "left", width:"60%",  }} >Teacher <span style={{ color: "#888787", fontSize: "clamp(5%, 3vw,60px)", fontWeight: "thin" }} >Digital Agency</span></h2>

        </div>
    )
}