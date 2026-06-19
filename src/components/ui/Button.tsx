import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-amber/50 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-amber text-white hover:bg-brand-gold shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-brand-dark text-white hover:bg-brand-brown shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
