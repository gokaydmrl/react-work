function Welcome() {
  return (
    <div
      style={{
        textAlign: "center",
        gap: "12px",
        padding: "24px",
      }}
    >
      <p style={{ fontSize: "4vw", fontWeight: "bolder" }}>
        React AI Voice Stream
      </p>
      <p style={{ fontSize: "3vw", fontWeight: "400" }}>
        Login to get welcome message from the AI
      </p>
      <div
        style={{
          color: "black",
          margin: 0,
          position: "relative",
        }}
      >
        <a style={{ color: "black" }} href="https://github.com/gokaydmrl">
          gokaydmrl
        </a>
      </div>
    </div>
  );
}

export default Welcome;
