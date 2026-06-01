import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center rounded-none font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50',
                    // Descente-like sharp edges (rounded-none or sm)

                    // Variants
                    variant === 'primary' &&
                    'bg-accent text-accent-foreground hover:bg-yellow-400 border border-transparent shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
                    variant === 'secondary' &&
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                    variant === 'outline' &&
                    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
                    variant === 'ghost' &&
                    'hover:bg-accent/10 text-primary',
                    variant === 'link' &&
                    'text-primary underline-offset-4 hover:underline',

                    // Sizes
                    size === 'sm' && 'h-9 px-4 text-sm',
                    size === 'md' && 'h-11 px-8 text-base tracking-wide',
                    size === 'lg' && 'h-14 px-10 text-lg tracking-wider',
                    size === 'icon' && 'h-10 w-10',

                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, cn };
