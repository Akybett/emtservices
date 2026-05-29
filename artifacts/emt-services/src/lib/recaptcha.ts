const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(siteKey: string): Promise<void> {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src^="https://www.google.com/recaptcha/api.js"]`,
    );
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      // Allow a retry on the next attempt instead of caching the failure.
      scriptPromise = null;
      script.remove();
      reject(new Error("Failed to load reCAPTCHA"));
    };
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export const isRecaptchaEnabled = Boolean(SITE_KEY);

// Returns a reCAPTCHA v3 token for the given action, or undefined when
// reCAPTCHA is not configured or unavailable (form still submits).
export async function getRecaptchaToken(action = "submit"): Promise<string | undefined> {
  if (!SITE_KEY) return undefined;
  try {
    await loadScript(SITE_KEY);
    await new Promise<void>((resolve) => {
      if (!window.grecaptcha) {
        resolve();
        return;
      }
      window.grecaptcha.ready(() => resolve());
    });
    if (!window.grecaptcha) return undefined;
    return await window.grecaptcha.execute(SITE_KEY, { action });
  } catch {
    return undefined;
  }
}
