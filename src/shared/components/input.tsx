import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helperText, className = "", ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1 w-full">
                {label && (
                    <label className="text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    className={`
            w-full rounded-lg border px-3 py-2 text-sm
            outline-none transition
            ${error
                            ? "border-red-500 focus:ring-2 focus:ring-red-300"
                            : "border-gray-300 focus:ring-2 focus:ring-black/20"
                        }
            ${className}
          `}
                    {...props}
                />

                {error ? (
                    <span className="text-xs text-red-500">{error}</span>
                ) : helperText ? (
                    <span className="text-xs text-gray-500">{helperText}</span>
                ) : null}
            </div>
        );
    }
);