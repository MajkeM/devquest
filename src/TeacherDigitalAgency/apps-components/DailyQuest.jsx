import React from "react";
import '../TDA-styles/DailyQuest.css';


export function DailyQuest() {
  return (
    <div className="daily-quest">

        <div className="daily-quest-rewards">
            <h2>Dev <span className="highlight">QUEST</span> dne</h2>
            <p>Odměny:</p>
      <ul>
        <li>+300 bodů do kurzu</li>
        <li>+150 bodů</li>
        <li>+100 bodů do úrovně</li>
      </ul>
        <p>Získejte titul: <strong>Lovec vlajek</strong></p>
            <button>Spustit úkol</button>
        </div>
        <div className="daily-quest-description">
            <h3><span className="highlight">Capture the Flag</span> — Terminálová verze</h3>
            <p style={{fontSize: "1.1em", fontWeight: "bold"}}>Kategorie: Cybersecurity, Algoritmy</p>
            <p><b>Obtížnost: </b><span style={{color: "orange"}}>Střední</span></p>
            <p>
              Vaším úkolem je vyřešit sérii Capture the Flag (CTF) výzev pomocí terminálu a jednoduchých Python skriptů. Narazíte na soubory chráněné heslem, zakódované zprávy a jednoduché webové servery. Použijte algoritmické techniky a zdokumentujte své příkazy a skripty.
            </p>
        </div>
    </div>
  );
}
  