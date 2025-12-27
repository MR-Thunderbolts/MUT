import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'solid', size = 'md', ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            solid: "bg-brand-coral text-white hover:bg-brand-coral/90 shadow-soft",
            outline: "border-2 border-brand-coral text-brand-coral hover:bg-brand-coral/10",
            ghost: "hover:bg-brand-dark/5 text-brand-dark"
        }

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
            icon: "h-10 w-10",
            "icon-sm": "h-8 w-8 text-xs",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
