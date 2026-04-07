import React from 'react';
import { cn } from '@/lib/utils';

interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const InputUI = React.forwardRef<HTMLInputElement, InputUIProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-foreground/90">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-2.5 rounded-lg',
              'bg-input/50 backdrop-blur-sm border border-input',
              'text-foreground placeholder-foreground/40',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'transition-all duration-200',
              icon ? 'pl-10' : '',
              error ? 'border-destructive/50 focus:ring-destructive' : '',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-destructive text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

InputUI.displayName = 'InputUI';
