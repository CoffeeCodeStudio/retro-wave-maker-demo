import { useEffect } from "react";

/**
 * Tries to enforce that only the intended Mixcloud player can produce audio.
 *
 * Note: We cannot directly control audio inside cross-origin iframes, so we:
 * - hard-stop any native <audio>/<video>
 * - ensure there is only ONE Mixcloud-related iframe in the DOM
 * - log what iframes/media exist to help identify the unexpected source
 */
const MediaGuard = () => {
  useEffect(() => {
    let sweepQueued = false;
    let lastLogAt = 0;

    const log = (message: string, data?: unknown) => {
      const now = Date.now();
      // throttle logs to avoid spamming
      if (now - lastLogAt < 2500) return;
      lastLogAt = now;
      // eslint-disable-next-line no-console
      console.info(`[MediaGuard] ${message}`, data ?? "");
    };

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
      return media.length;
    };

    const listIframes = () => {
      const iframes = Array.from(document.querySelectorAll("iframe"))
        .filter((el): el is HTMLIFrameElement => el instanceof HTMLIFrameElement)
        .map((iframe) => {
          const rect = iframe.getBoundingClientRect();
          const area = Math.round(Math.max(0, rect.width) * Math.max(0, rect.height));
          const hidden = iframe.offsetParent === null || getComputedStyle(iframe).display === "none";
          return {
            src: iframe.src || "(no src)",
            area,
            hidden,
          };
        });
      return iframes;
    };

    const enforceSingleMixcloudIframe = () => {
      const mixcloudIframes = Array.from(document.querySelectorAll("iframe"))
        .filter((el): el is HTMLIFrameElement => el instanceof HTMLIFrameElement)
        .filter((iframe) => (iframe.src || "").includes("mixcloud.com"));

      if (mixcloudIframes.length <= 1) return 0;

      // Keep the most "visible" one (largest rendered area)
      const sorted = [...mixcloudIframes].sort((a, b) => {
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        const aArea = Math.max(0, ar.width) * Math.max(0, ar.height);
        const bArea = Math.max(0, br.width) * Math.max(0, br.height);
        return bArea - aArea;
      });

      const keep = sorted[0];
      const remove = sorted.slice(1);
      remove.forEach((iframe) => iframe.remove());

      log("Removed extra mixcloud iframe(s)", {
        kept: keep.src,
        removed: remove.map((i) => i.src),
      });

      return remove.length;
    };

    const sweep = (reason: string) => {
      const mediaCount = stopAllMediaElements();
      const removedMixcloud = enforceSingleMixcloudIframe();
      const iframes = listIframes();

      log(`Sweep (${reason})`, {
        mediaCount,
        removedMixcloud,
        iframeCount: iframes.length,
        iframes,
      });
    };

    const queueSweep = (reason: string) => {
      if (sweepQueued) return;
      sweepQueued = true;
      setTimeout(() => {
        sweepQueued = false;
        sweep(reason);
      }, 0);
    };

    const onPlayCapture = (e: Event) => {
      const target = e.target as unknown;
      if (target instanceof HTMLMediaElement) {
        log("Blocked native media play()", { tag: target.tagName });
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
    sweep("init");

    // Guard against future injections
    document.addEventListener("play", onPlayCapture, true);

    const observer = new MutationObserver((mutations) => {
      // Log any added iframes/media to identify the "second" audio source
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.tagName === "IFRAME") {
            const iframe = node as HTMLIFrameElement;
            log("iframe added", { src: iframe.src || "(no src)" });
          }
          if (node.tagName === "AUDIO" || node.tagName === "VIDEO") {
            log("native media element added", { tag: node.tagName });
          }
        });
      }

      queueSweep("mutation");
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
    });

    // Periodic sweep in case audio starts without DOM mutations
    const interval = window.setInterval(() => queueSweep("interval"), 4000);

    return () => {
      document.removeEventListener("play", onPlayCapture, true);
      observer.disconnect();
      window.clearInterval(interval);
    };
  }, []);

  return null;
};

export default MediaGuard;

