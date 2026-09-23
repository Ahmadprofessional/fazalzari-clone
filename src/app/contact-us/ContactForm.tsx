"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_PHONE = "923009736020";

const inputClasses =
  "h-12 w-full border border-gold-border bg-transparent px-4 font-sans text-sm text-[#0a0a0a] placeholder:text-body-gray focus:border-gold focus:outline-none";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const lines = [
      "Hi, I'd like to get in touch.",
      fullName && `Name: ${fullName}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(waLink, "_blank");
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputClasses}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClasses}
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full resize-none border border-gold-border bg-transparent px-4 py-3 font-sans text-sm text-[#0a0a0a] placeholder:text-body-gray focus:border-gold focus:outline-none"
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-[3px] border-[1.6px] border-gold-light bg-transparent px-7 py-[15px] font-serif text-[15px] font-semibold uppercase text-[#0a0a0a] transition-all duration-300 ease-in-out hover:bg-gold-light"
      >
        Send
      </button>
    </form>
  );
}
