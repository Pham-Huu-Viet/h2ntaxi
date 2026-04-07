import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardUIProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid";
  isHoverable?: boolean;
  children: React.ReactNode;
}

export function CardUI({
  variant = "glass",
  isHoverable = true,
  className,
  children,
  ...props
}: CardUIProps) {
  const baseStyles = "rounded-xl border transition-all duration-300";

  const variantStyles = {
    glass: "bg-card/20 backdrop-blur-md border-border/20",
    solid: "bg-card border-border",
  };

  const hoverStyles = {
    glass: "hover:bg-card/30 hover:border-border/40 hover:shadow-lg",
    solid: "hover:bg-card/95 hover:border-accent/50 hover:shadow-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        baseStyles,
        variantStyles[variant],
        isHoverable && hoverStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
