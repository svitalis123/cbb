import { Card as ShadcnCard } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const CardComponent = ({ 
  children, 
  className,
  variant = 'elevated',
  ...props 
}) => {
  return (
    <ShadcnCard
      className={cn(
        "rounded-xl p-6",
        variant === 'elevated' && "shadow-lg bg-white",
        variant === 'outlined' && "border-2 border-neutral-200",
        variant === 'flat' && "bg-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnCard>
  )
}