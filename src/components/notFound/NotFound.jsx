import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        {/* Status badge */}
        <div className="notfound-status">
          <span className="notfound-status-dot" />
          Error · Page Unreachable
        </div>

        {/* Giant glitching 404 */}
        <div className="notfound-code" data-text="404">
          404
        </div>

        <div className="notfound-divider" />

        {/* Heading & copy */}
        <h1 className="notfound-title">Signal Lost</h1>
        <p className="notfound-message">
          The coordinates you entered don't map to any known sector. The page
          may have drifted, been redacted, or never existed.
        </p>

        {/* Terminal log */}
        <div className="notfound-log">
          <div className="notfound-log-line">ROUTE_MATCH: null</div>
          <div className="notfound-log-line">HTTP_STATUS: 404 Not Found</div>
          <div className="notfound-log-line">
            SCANNING FOR ALTERNATIVES…&nbsp;
            <span className="notfound-cursor" />
          </div>
        </div>

        {/* CTAs */}
        <div className="notfound-actions">
          <a href="/" className="notfound-btn notfound-btn-primary">
            Return to Base
          </a>
        </div>
      </div>

      {/* Ambient coordinates watermark */}
      <div className="notfound-coords">LAT 404.00 · LON 000.00 · ALT ∞</div>
    </div>
  );
}
