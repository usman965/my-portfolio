"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en" className="dark">
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          display: "grid",
          placeItems: "center",
          padding: 24,
          fontFamily: "system-ui, sans-serif",
          background: "#070b14",
          color: "#e4e4e7",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 420 }}>
          <h1 style={{ fontSize: "1.25rem", marginBottom: 12 }}>
            Something went wrong
          </h1>
          {error?.digest != null && (
            <p style={{ fontSize: "0.75rem", color: "#71717a" }}>
              {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(34,211,238,0.15)",
              color: "#a5f3fc",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
