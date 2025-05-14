import "../../index.css";
function VoiceAnim() {
  return (
    <div
      id="bars"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="bar"></div>
      ))}
    </div>
  );
}
export default VoiceAnim;
