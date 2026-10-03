"use client";

import { useState, useEffect, type FormEvent } from "react";

const WHATSAPP_PHONE = "923009736020";

const inputClasses =
  "h-12 w-full border border-gold-border bg-transparent px-4 font-sans text-sm text-[#0a0a0a] placeholder:text-body-gray focus:border-gold focus:outline-none transition-colors duration-200";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(window.location.origin + window.location.pathname + "?success=true");
    
    if (window.location.search.includes("success=true")) {
      setIsSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border-[1.6px] border-gold-light bg-gold-light/5 text-center">
        <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-serif text-[#0a0a0a] mb-2">Thank you!</h3>
        <p className="text-body-gray font-sans text-sm">Your message has been sent successfully. We will get back to you shortly.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 inline-flex items-center justify-center rounded-[3px] border-[1.6px] border-gold-light bg-transparent px-6 py-[12px] font-serif text-[14px] font-semibold uppercase text-[#0a0a0a] transition-all duration-300 hover:bg-gold-light"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-4"
      aria-label="Contact form"
    >
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "3c947022-6ec8-48aa-825e-1d2ee1450345"} />
      <input type="hidden" name="subject" value="New Contact Form Submission from Fazal Zari Website" />
      <input type="hidden" name="from_name" value="Fazal Zari Website" />
      <input type="hidden" name="name" value={fullName} />
      {redirectUrl && <input type="hidden" name="redirect" value={redirectUrl} />}
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
            className={inputClasses}
          />
        </div>
      </div>

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
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

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
          className="w-full resize-none border border-gold-border bg-transparent px-4 py-3 font-sans text-sm text-[#0a0a0a] placeholder:text-body-gray focus:border-gold focus:outline-none transition-colors duration-200"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-[3px] border-[1.6px] border-gold-light bg-transparent px-7 py-[15px] font-serif text-[15px] font-semibold uppercase text-[#0a0a0a] transition-all duration-300 ease-in-out hover:bg-gold-light"
      >
        Send
      </button>
    </form>
  );
}
