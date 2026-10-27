"use client";

import { useState, useRef, type FormEvent } from "react";
import ReCaptcha, { type ReCaptchaHandle } from "@/components/ReCaptcha";

const inputClasses =
  "h-12 w-full border border-gold-border bg-transparent px-4 font-sans text-sm text-[#0a0a0a] placeholder:text-body-gray focus:border-gold focus:outline-none transition-colors duration-200";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot field for bot filtering
  const [honeypot, setHoneypot] = useState("");

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCaptchaHandle>(null);

  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6Lc6QQMuAAAAACE_IsNqa0hBnaCOpas_ZbBiKu7C";

  const handleResetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setHoneypot("");
    setRecaptchaToken(null);
    setErrorMessage(null);
    setIsSuccess(false);
    recaptchaRef.current?.reset();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate reCAPTCHA client-side before dispatching
    if (!recaptchaToken) {
      setErrorMessage("Please complete the 'I'm not a robot' reCAPTCHA checkbox below.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          recaptchaToken,
          website: honeypot, // Honeypot field
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        // Reset reCAPTCHA on failed submission so user can try again
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        setErrorMessage(
          data.error || "Unable to send your message. Please check the details and try again."
        );
        return;
      }

      // Success: show confirmation screen and reset recaptcha widget
      setIsSuccess(true);
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (err) {
      console.error("[ContactForm] Error submitting form:", err);
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border-[1.6px] border-gold-light bg-gold-light/5 text-center">
        <svg
          className="w-16 h-16 text-green-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-serif text-[#0a0a0a] mb-2">Thank you!</h3>
        <p className="text-body-gray font-sans text-sm max-w-[420px]">
          Your message has been sent successfully. A confirmation email has been sent to{" "}
          <strong className="text-[#0a0a0a] font-medium">{email}</strong>. Our bridal concierge team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={handleResetForm}
          className="mt-8 inline-flex items-center justify-center rounded-[3px] border-[1.6px] border-gold-light bg-transparent px-6 py-[12px] font-serif text-[14px] font-semibold uppercase text-[#0a0a0a] transition-all duration-300 hover:bg-gold-light"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const isSubmitDisabled = isSubmitting || !recaptchaToken;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Contact form"
      noValidate
    >
      {/* Honeypot field (hidden from legitimate users, catches automated bots) */}
      <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Name row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-first-name" className="sr-only">
            First Name
          </label>
          <input
            id="contact-first-name"
            type="text"
            name="firstName"
            placeholder="Name *"
            required
            minLength={2}
            maxLength={50}
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={isSubmitting}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-last-name" className="sr-only">
            Last Name
          </label>
          <input
            id="contact-last-name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            maxLength={50}
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={isSubmitting}
            className={inputClasses}
          />
        </div>
      </div>

      {/* Email & Phone row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Email *"
            required
            maxLength={100}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            pattern="[+0-9\s\-]{7,20}"
            maxLength={30}
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isSubmitting}
            className={inputClasses}
          />
        </div>
      </div>

      {/* Message textarea */}
      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Message *"
          rows={5}
          required
          minLength={10}
          maxLength={2000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSubmitting}
          className="w-full resize-none border border-gold-border bg-transparent px-4 py-3 font-sans text-sm text-[#0a0a0a] placeholder:text-body-gray focus:border-gold focus:outline-none transition-colors duration-200 disabled:opacity-60"
        />
      </div>

      {/* reCAPTCHA v2 Checkbox Widget */}
      <div className="pt-1">
        <ReCaptcha
          ref={recaptchaRef}
          siteKey={recaptchaSiteKey}
          onChange={(token) => {
            setRecaptchaToken(token);
            if (token && errorMessage?.includes("reCAPTCHA")) {
              setErrorMessage(null);
            }
          }}
          onExpired={() => setRecaptchaToken(null)}
          theme="light"
        />
        {!recaptchaToken && (
          <p className="mt-1 text-xs text-body-gray">
            Please check the box above to verify you are not a robot before submitting.
          </p>
        )}
      </div>

      {/* Error alert banner */}
      {errorMessage && (
        <div
          role="alert"
          className="rounded-[3px] border border-red-200 bg-red-50/90 p-3 text-sm text-red-800 transition-all duration-200 flex items-start gap-2"
        >
          <svg
            className="size-5 shrink-0 text-red-600 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="inline-flex items-center justify-center gap-2 rounded-[3px] border-[1.6px] border-gold-light bg-transparent px-7 py-[15px] font-serif text-[15px] font-semibold uppercase text-[#0a0a0a] transition-all duration-300 ease-in-out hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-transparent"
        >
          {isSubmitting ? (
            <>
              <svg
                className="size-4 animate-spin text-[#0a0a0a]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <span>Send</span>
          )}
        </button>
      </div>
    </form>
  );
}
