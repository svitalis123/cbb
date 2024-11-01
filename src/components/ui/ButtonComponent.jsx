import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Button = ({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  ...props 
}) => {
  return (
    <ShadcnButton
      className={cn(
        "font-medium rounded-lg transition-colors",
        variant === 'primary' && "bg-primary text-white hover:bg-primary-dark",
        variant === 'secondary' && "bg-secondary text-primary hover:bg-secondary/90",
        variant === 'outline' && "border-2 border-primary text-primary hover:bg-primary/10",
        variant === 'ghost' && "text-primary hover:bg-primary/10",
        size === 'sm' && "px-3 py-1.5 text-sm",
        size === 'md' && "px-4 py-2 text-base",
        size === 'lg' && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnButton>
  )
}