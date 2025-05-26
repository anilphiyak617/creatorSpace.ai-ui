import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"

const loaderVariants = cva(
  "inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  {
    variants: {
      size: {
        default: "h-8 w-8",
        sm: "h-6 w-6",
        lg: "h-12 w-12",
      },
      color: {
        default: "text-primary",
        secondary: "text-secondary",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "default",
      color: "default",
    },
  }
)

export interface LoaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof loaderVariants> {
  srText?: string
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, size, color, srText = "Loading...", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(loaderVariants({ size, color, className }))}
        role="status"
        aria-label={srText}
        {...props}
      >
        <span className="sr-only">{srText}</span>
      </div>
    )
  }
)

Loader.displayName = "Loader"

export { Loader, loaderVariants }