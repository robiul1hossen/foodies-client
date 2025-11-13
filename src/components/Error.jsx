export default function Error({
  title = "404",
  subtitle = "Page not found",
  homeHref = "/",
  className = "",
}) {
  return (
    <section
      aria-labelledby="error-title"
      style={{
        width: "100%",
        padding: "64px 20px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        height: "100vh",
      }}
      className={className}>
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10%",
          top: "-20%",
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(32px) saturate(120%)",
          opacity: 0.85,
        }}
        viewBox="0 0 800 800">
        <defs>
          <linearGradient id="bgGradA" x1="0" x2="1">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <linearGradient id="bgGradB" x1="0" x2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        <g transform="translate(120 80)">
          <path
            d="M0 200 C120 -40 420 -40 560 140 C700 320 580 520 380 540 C180 560 -20 440 0 200Z"
            fill="url(#bgGradA)"
            opacity="0.85"
          />
        </g>

        <g transform="translate(160 260) rotate(25)">
          <path
            d="M0 160 C90 -20 360 -30 480 130 C600 290 520 440 340 460 C160 480 10 360 0 160Z"
            fill="url(#bgGradB)"
            opacity="0.75"
          />
        </g>
      </svg>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.02) 0 1px, transparent 1px), radial-gradient(circle at 90% 90%, rgba(0,0,0,0.02) 0 1px, transparent 1px)",
          backgroundSize: "14px 14px, 14px 14px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: 24,
          zIndex: 2,
          position: "relative",
        }}>
        <div
          style={{
            flex: "0 0 220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-hidden="true">
          <svg
            width="180"
            height="180"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}>
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            <circle
              cx="100"
              cy="100"
              r="64"
              stroke="url(#g1)"
              strokeWidth="6"
              opacity="0.18"
            />
            <g
              style={{
                transformOrigin: "100px 100px",
                animation: "rotate 12s linear infinite",
              }}>
              <path
                d="M100 32c14 0 28 6 38 16s16 24 16 38-6 28-16 38-24 16-38 16-28-6-38-16S48 132 48 118s6-28 16-38 24-16 36-16z"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
            </g>

            <circle cx="100" cy="100" r="6" fill="#0EA5E9" />
            <style>{`
              @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </svg>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            id="error-title"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 5vw, 3rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 800,
              color: "white",
            }}>
            {title}
          </h1>

          <p
            style={{
              marginTop: 10,
              marginBottom: 20,
              fontSize: "1rem",
              color: "white",
              maxWidth: 720,
            }}>
            {subtitle} — the page you were looking for doesn’t exist or has
            moved.
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a
              href={homeHref}
              role="button"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                borderRadius: 12,
                border: "1px solid rgba(15,23,42,0.08)",
                cursor: "pointer",
                fontWeight: 700,
                transition: "transform .12s ease, box-shadow .12s ease",
                background: "rgba(255,255,255,0.9)",
                color: "#0F172A",
                boxShadow: "0 6px 18px rgba(12, 24, 58, 0.08)",
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.98)")
              }
              onMouseUp={(e) => (e.currentTarget.style.transform = "")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
              aria-label="Go back to home">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden>
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </a>

            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                padding: "8px 14px",
                borderRadius: 12,
                border: "1px solid rgba(15,23,42,0.06)",
                background: "transparent",
                cursor: "pointer",
                fontWeight: 600,
                color: "white",
              }}>
              Refresh
            </button>
          </div>

          <p
            style={{
              marginTop: 14,
              fontSize: 12,
              color: "white",
            }}
            className="text-warning">
            Tip: check the URL or use the navigation above.
          </p>
        </div>
      </div>
    </section>
  );
}
