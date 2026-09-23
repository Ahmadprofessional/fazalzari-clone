import type { SVGProps } from "react";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.4Z" />
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}

interface WhatsAppButtonProps {
  message?: string;
  variant?: "floating" | "inline";
  className?: string;
  label?: string;
}

const PHONE = "923009736020";

export default function WhatsAppButton({
  message = "Hi, I'm interested in Fazal Zari bridal wear.",
  variant = "floating",
  className,
  label,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={
          className ??
          "inline-flex items-center justify-center gap-2 rounded-[3px] border-[1.6px] border-gold-light px-6 py-3 font-serif text-[14px] font-semibold uppercase text-white transition-all duration-300 ease-in-out hover:bg-gold-light hover:text-[#0a0a0a]"
        }
      >
        <WhatsAppIcon className="size-4" />
        {label ?? "Enquire on WhatsApp"}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
