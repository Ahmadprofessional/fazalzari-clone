"use client";

import {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useId,
} from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          theme?: "light" | "dark";
          size?: "normal" | "compact";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          [key: string]: unknown;
        }
      ) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    __recaptchaLoaded?: boolean;
    __recaptchaOnloadCallbacks?: Array<() => void>;
  }
}

export interface ReCaptchaHandle {
  reset: () => void;
  getResponse: () => string;
}

interface ReCaptchaProps {
  siteKey: string;
  onChange: (token: string | null) => void;
  onExpired?: () => void;
  onError?: () => void;
  theme?: "light" | "dark";
  className?: string;
}

const SCRIPT_URL = "https://www.google.com/recaptcha/api.js?render=explicit";

function loadRecaptchaScript(onLoad: () => void) {
  if (typeof window === "undefined") return;

  if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
    onLoad();
    return;
  }

  if (!window.__recaptchaOnloadCallbacks) {
    window.__recaptchaOnloadCallbacks = [];
  }
  window.__recaptchaOnloadCallbacks.push(onLoad);

  const existingScript = document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js"]`);
  if (existingScript) {
    return;
  }

  const script = document.createElement("script");
  script.src = SCRIPT_URL;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.__recaptchaLoaded = true;
        window.__recaptchaOnloadCallbacks?.forEach((cb) => cb());
        window.__recaptchaOnloadCallbacks = [];
      });
    }
  };
  document.head.appendChild(script);
}

const ReCaptcha = forwardRef<ReCaptchaHandle, ReCaptchaProps>(function ReCaptcha(
  { siteKey, onChange, onExpired, onError, theme = "light", className },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const uniqueId = useId();

  useImperativeHandle(ref, () => ({
    reset() {
      if (typeof window !== "undefined" && window.grecaptcha && widgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (e) {
          console.warn("[reCAPTCHA] Failed to reset widget:", e);
        }
      }
      onChange(null);
    },
    getResponse() {
      if (typeof window !== "undefined" && window.grecaptcha && widgetIdRef.current !== null) {
        return window.grecaptcha.getResponse(widgetIdRef.current) || "";
      }
      return "";
    },
  }));

  useEffect(() => {
    if (!siteKey) {
      console.error("[reCAPTCHA] Missing site key. Provide NEXT_PUBLIC_RECAPTCHA_SITE_KEY.");
      return;
    }

    let isCancelled = false;

    loadRecaptchaScript(() => {
      if (isCancelled || !containerRef.current) return;

      // Avoid re-rendering if already initialized inside this container
      if (widgetIdRef.current !== null) return;
      if (containerRef.current.hasChildNodes()) return;

      try {
        widgetIdRef.current = window.grecaptcha!.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token: string) => {
            onChange(token);
          },
          "expired-callback": () => {
            onChange(null);
            onExpired?.();
          },
          "error-callback": () => {
            onChange(null);
            onError?.();
          },
        });
      } catch (err) {
        console.error("[reCAPTCHA] Error rendering widget:", err);
      }
    });

    return () => {
      isCancelled = true;
      if (typeof window !== "undefined" && window.grecaptcha && widgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch {
          // ignore cleanup errors on unmount
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme, onChange, onExpired, onError]);

  return (
    <div
      id={`recaptcha-wrapper-${uniqueId}`}
      className={`min-h-[78px] flex items-center justify-start overflow-x-auto ${className || ""}`}
    >
      <div ref={containerRef} />
    </div>
  );
});

export default ReCaptcha;
