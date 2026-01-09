import { useEffect } from "react";

/**
 * Enforces a single Mixcloud iframe and prevents any other <audio>/<video>
 * elements (including injected ones) from playing.
 */
const MediaGuard = () => {
  useEffect(() => {
    const stopAllMediaElements = () => {
      const media = Array.from(document.querySelectorAll("audio,video")) as HTMLMediaElement[];
      media.forEach((el) => {
        try {
          el.pause();
          el.muted = true;
          el.volume = 0;
        } catch {
          // ignore
        }
      });
    };

    const removeExtraMixcloudIframes = () => {
      const mixcloudIframes = Array.from(document.querySelectorAll("iframe"))
        .filter((el): el is HTMLIFrameElement => el instanceof HTMLIFrameElement)
        .filter((iframe) => iframe.src.includes("player-widget.mixcloud.com/widget/iframe"));

      // Keep the first one (the visible player) and remove duplicates.
      mixcloudIframes.slice(1).forEach((iframe) => iframe.remove());
    };

    const onPlayCapture = (e: Event) => {
      const target = e.target as unknown;
      if (target instanceof HTMLMediaElement) {
        try {
          target.pause();
          target.muted = true;
          target.volume = 0;
        } catch {
          // ignore
        }
      }
    };

    // Initial sweep
    stopAllMediaElements();
    removeExtraMixcloudIframes();

    // Guard against future injections
    document.addEventListener("play", onPlayCapture, true);

    const observer = new MutationObserver(() => {
      stopAllMediaElements();
      removeExtraMixcloudIframes();
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
    });

    return () => {
      document.removeEventListener("play", onPlayCapture, true);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default MediaGuard;
