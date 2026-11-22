import {
  OFFICIAL_ANDROID_URL,
  OFFICIAL_DEVELOPER_URL,
  OFFICIAL_IOS_URL,
} from "@/lib/site";

export default function DownloadButton() {
  return (
    <div className="hero-actions official-store-links" aria-label="Official FR Legends downloads">
      <a
        href={OFFICIAL_ANDROID_URL}
        className="btn btn-primary btn-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Play · Android
      </a>
      <a
        href={OFFICIAL_IOS_URL}
        className="btn btn-outline btn-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        App Store · iPhone and iPad
      </a>
      <a
        href={OFFICIAL_DEVELOPER_URL}
        className="text-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit the developer’s website
      </a>
    </div>
  );
}
