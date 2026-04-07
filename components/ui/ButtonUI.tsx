import React from "react";
import { motion, HTMLMotionProps } from "framer-motion"; // Thêm HTMLMotionProps
import { cn } from "@/lib/utils";

// Cập nhật Interface ở đây
interface ButtonUIProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function ButtonUI({
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  children,
  disabled,
  // Thêm layout và transition vào đây để destructure hoặc dùng ...props
  ...props
}: ButtonUIProps) {
  const baseStyles =
    "font-medium rounded-lg flex items-center justify-center gap-2";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border border-border text-foreground hover:bg-card/50",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <motion.button
      // props này bây giờ sẽ bao gồm cả layout, transition, whileHover...
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || isLoading) && "opacity-50 cursor-not-allowed",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="animate-spin">⚙️</span> : children}
    </motion.button>
  );
}
