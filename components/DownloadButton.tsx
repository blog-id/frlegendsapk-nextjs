"use client";

import { useState } from "react";
import { APK_DOWNLOAD_URL } from "@/lib/site";

type Stage = "idle" | "preparing" | "ready";

export default function DownloadButton() {
  const [stage, setStage] = useState<Stage>("idle");
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (stage !== "idle") return;
    setStage("preparing");

    const tick = window.setInterval(() => {
      setProgress((width) => Math.min(width + 18, 96));
    }, 180);

    window.setTimeout(() => {
      window.clearInterval(tick);
      setProgress(100);
      window.setTimeout(() => {
        setStage("ready");
        window.location.href = APK_DOWNLOAD_URL;
      }, 300);
    }, 2000);
  };

  return (
    <>
      {stage === "idle" ? (
        <a
          id="download-btn"
          href={APK_DOWNLOAD_URL}
          className="btn btn-primary btn-lg btn-block"
          rel="noopener"
          download
          onClick={handleClick}
        >
          Download Now, Free
        </a>
      ) : null}

      {stage === "preparing" ? (
        <div id="download-preparing" className="download-status">
          <p style={{ fontWeight: 700, marginBottom: 4 }}>
            Preparing your download&hellip;
          </p>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Preparing download"
          >
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      ) : null}

      {stage === "ready" ? (
        <div id="download-ready" className="download-status">
          <p style={{ marginBottom: 4 }}>
            Your download is starting. If it doesn&apos;t begin automatically,{" "}
            <a href={APK_DOWNLOAD_URL} rel="noopener" download>
              click here to start it manually
            </a>
            .
          </p>
        </div>
      ) : null}
    </>
  );
}