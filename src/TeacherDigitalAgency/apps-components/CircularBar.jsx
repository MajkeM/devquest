import '../TDA-styles/circle.css';

function CircularBar({ value = 1, percent = 0 }) {
  // percent: 0-100, value: display number
  // 100 is full circle, 75 is 75%, etc.
  return (
    <div className="circular-bar">
      <svg viewBox="0 0 36 36">
        <circle className="circle-bg" cx="18" cy="18" r="16" />
        <circle
          className="circle-fg"
          cx="18"
          cy="18"
          r="16"
          style={{
            strokeDasharray: `${percent}, 100`,
            strokeDashoffset: 0,
          }}
        />
      </svg>
      <span className="circle-text">{value}</span>
    </div>
  );
}

export default CircularBar;